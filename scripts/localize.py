#!/usr/bin/env python3
"""Build static translations, check coverage, or fill missing copy with DeepL.
French templates remain the editorial source; no production dependency.
"""
import argparse
import getpass
import json
import os
import re
import sys
import tempfile
import urllib.error
import urllib.request
from html import escape
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit

ROOT = Path(__file__).resolve().parents[1]
PAGES = {'': 'home.html', 'projets/': 'projects.html'}
ORIGIN = 'https://www.jzs.fr'
DYNAMIC = ['Projet {current} sur {total} : {name}', '{count} projet à explorer',
           '{count} projets à explorer', 'Langue', 'Langue du navigateur']
ATTRIBUTES = {'alt', 'title', 'aria-label', 'placeholder', 'data-video-title'}
META = {'description', 'og:title', 'og:description', 'og:image:alt', 'twitter:image:alt'}

def normalize(text):
    return ' '.join(text.split())

def read_json(path):
    def unique(pairs):
        result = {}
        for key, value in pairs:
            if key in result:
                raise ValueError(f'Duplicate key in {path}: {key}')
            result[key] = value
        return result
    return json.loads(path.read_text(), object_pairs_hook=unique)

def atomic_write(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(mode='w', encoding='utf-8', dir=path.parent, delete=False) as f:
        temporary = Path(f.name)
        f.write(text)
    try:
        temporary.replace(path)
    finally:
        temporary.unlink(missing_ok=True)

class Page(HTMLParser):
    """Translate text and human-facing attributes, preserving markup and identifiers."""
    def __init__(self, route, language, config, catalog=None, entry=False):
        super().__init__(convert_charrefs=True)
        self.route, self.language, self.config = route, language, config
        self.catalog, self.entry = catalog, entry
        self.output, self.keys = [], set()
        self.skip = 0

    def translate(self, value):
        from html import unescape
        key = normalize(unescape(value))
        if not re.search(r'[a-zA-ZÀ-ÿ]', key):
            return value
        self.keys.add(key)
        if self.catalog is None:
            return value
        translated = self.catalog[key]
        leading = value[:len(value) - len(value.lstrip())]
        trailing = value[len(value.rstrip()):]
        return leading + translated + trailing

    def url(self, value):
        if not value or value.startswith('#'):
            return value
        resolved = urlsplit(urljoin(ORIGIN + '/' + self.route, value))
        if resolved.netloc != 'www.jzs.fr' or resolved.scheme != 'https':
            return value
        path = resolved.path.lstrip('/')
        if path in PAGES or path == 'index.html' or path == 'projets/index.html':
            path = path.replace('index.html', '')
            path = self.language + '/' + path
        return '/' + path + ('?' + resolved.query if resolved.query else '') + ('#' + resolved.fragment if resolved.fragment else '')

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ('script', 'style'):
            self.skip += 1
        changed = []
        for key, value in attrs:
            if value is not None:
                if key in ATTRIBUTES or (tag == 'meta' and key == 'content' and (a.get('name') in META or a.get('property') in META)):
                    value = self.translate(value)
                if key in ('href', 'src'):
                    value = self.url(value)
                if tag == 'html' and key == 'lang':
                    value = self.language
                if tag == 'meta' and a.get('property') == 'og:locale' and key == 'content':
                    value = self.config['languages'][self.language]['og_locale']
                if (tag == 'link' and a.get('rel') == 'canonical' and key == 'href') or (tag == 'meta' and a.get('property') == 'og:url' and key == 'content'):
                    value = ORIGIN + '/' + self.language + '/' + self.route
            changed.append((key, value))
        if tag == 'html':
            changed.extend([('data-page-route', self.route), ('data-language-entry', str(self.entry).lower())])
        self.output.append('<' + tag + ''.join(' ' + k + ('' if v is None else '="' + escape(v, quote=True) + '"') for k, v in changed) + '>')
        if tag == 'head':
            self.output.append('\n<script src="/assets/i18n-config.js"></script>\n<script src="/assets/language.js"></script>\n<link rel="stylesheet" href="/assets/language.css">\n')
            for lang in [*self.config['languages'], 'x-default']:
                target = '' if lang == 'x-default' else lang + '/'
                self.output.append(f'<link rel="alternate" hreflang="{lang}" href="{ORIGIN}/{target}{self.route}">\n')

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)

    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self.skip -= 1
        self.output.append(f'</{tag}>')
        if tag == 'header':
            label = self.translate('Langue')
            automatic = self.translate('Langue du navigateur')
            self.output.append(f'<nav class="language-switch" aria-label="{escape(label)}">')
            for lang, info in self.config['languages'].items():
                current = ' aria-current="true"' if lang == self.language else ''
                self.output.append(f'<a href="/{lang}/{self.route}" lang="{lang}" hreflang="{lang}" data-language="{lang}"{current}>{escape(info["label"])}</a>')
            self.output.append(f'<a href="/{self.route}" data-language="auto">{escape(automatic)}</a></nav>')

    def handle_data(self, data):
        self.output.append(data if self.skip else escape(self.translate(data), quote=False))

    def handle_entityref(self, name):
        self.output.append('&' + name + ';')

    def handle_charref(self, name):
        self.output.append('&#' + name + ';')

    def handle_comment(self, data):
        self.output.append('<!--' + data + '-->')

    def handle_decl(self, decl):
        self.output.append('<!' + decl + '>')


def source_keys(config):
    keys = set(DYNAMIC)
    for route, template in PAGES.items():
        page = Page(route, 'fr', config)
        page.feed((ROOT / 'templates' / template).read_text())
        keys.update(page.keys)
    return keys

def validate(source, translated):
    if not isinstance(translated, str) or not translated.strip():
        raise ValueError('Empty or invalid translation')
    if sorted(re.findall(r'\{\w+\}', source)) != sorted(re.findall(r'\{\w+\}', translated)):
        raise ValueError('Changed placeholders')

def catalogs(config):
    keys = source_keys(config)
    result = {}
    for lang in config['languages']:
        path = ROOT / 'locales' / f'{lang}.json'
        result[lang] = {k: k for k in keys} if lang == config['source_language'] else (read_json(path) if path.exists() else {})
    return keys, result

def check(config, keys, translations):
    problems = []
    for lang, catalog in translations.items():
        for key in sorted(keys):
            try:
                validate(key, catalog.get(key))
            except ValueError as error:
                problems.append(f'{lang}: {error}: {key}')
    return problems

def build(config, keys, translations):
    problems = check(config, keys, translations)
    if problems:
        raise ValueError('\n'.join(problems))
    outputs = {}
    for route, template in PAGES.items():
        source = (ROOT / 'templates' / template).read_text()
        for lang in config['languages']:
            page = Page(route, lang, config, translations[lang])
            page.feed(source)
            outputs[ROOT / lang / route / 'index.html'] = ''.join(page.output)
        fallback = config['fallback_language']
        page = Page(route, fallback, config, translations[fallback], entry=True)
        page.feed(source)
        outputs[ROOT / route / 'index.html'] = ''.join(page.output)
    runtime = {'fallback': config['fallback_language'], 'languages': {lang: {k: catalog[k] for k in DYNAMIC} for lang, catalog in translations.items()}}
    outputs[ROOT / 'assets/i18n-config.js'] = '// Generated by scripts/localize.py build.\nwindow.siteLocales = ' + json.dumps(runtime, ensure_ascii=False) + ';\n'
    for path, text in outputs.items():
        atomic_write(path, text)
    print(f'Built {len(outputs) - 1} pages; {len(keys)} translation keys.')

def env_key():
    """Read only DEEPL_API_KEY; never execute or expand dotenv contents."""
    import shlex
    path = ROOT / '.env'
    if not path.exists():
        return ''
    key = ''
    for line in path.read_text().splitlines():
        match = re.match(r'^\s*(?:export\s+)?DEEPL_API_KEY\s*=\s*(.*)$', line)
        if match:
            try:
                values = shlex.split(match.group(1), comments=True)
            except ValueError:
                raise ValueError('Invalid DEEPL_API_KEY entry in .env') from None
            if len(values) > 1:
                raise ValueError('Invalid DEEPL_API_KEY entry in .env')
            key = values[0] if values else ''
    return key

def save_env_key(key):
    path = ROOT / '.env'
    lines = path.read_text().splitlines() if path.exists() else []
    lines = [line for line in lines if not re.match(r'^\s*(?:export\s+)?DEEPL_API_KEY\s*=', line)]
    # JSON quoting is compatible with the dotenv reader, including literal symbols.
    lines.append('DEEPL_API_KEY=' + json.dumps(key))
    atomic_write(path, '\n'.join(lines) + '\n')
    path.chmod(0o600)

def api_key():
    key = os.environ.get('DEEPL_API_KEY', '').strip()
    if not key:
        key = env_key().strip()
    if not key:
        for path in [Path.home() / '.config/jzs.fr/deepl-api-key', Path.home() / '.config/jotlane/deepl-api-key']:
            if path.exists():
                if path.stat().st_mode & 0o077:
                    raise ValueError('DeepL key file must have permissions 600')
                key = path.read_text().strip()
                break
    if not key or any(c.isspace() for c in key):
        raise ValueError('DeepL key missing or invalid. Run python3 scripts/localize.py configure in a terminal.')
    return key

def request(config, endpoint, payload=None):
    key = api_key()
    plan = config.get('deepl_api', 'auto')
    if plan not in ('auto', 'free', 'pro'):
        raise ValueError('Invalid DeepL plan')
    host = 'https://api-free.deepl.com' if plan == 'free' or (plan == 'auto' and key.endswith(':fx')) else 'https://api.deepl.com'
    class NoRedirect(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *args):
            raise ValueError('DeepL redirects are not allowed')
    req = urllib.request.Request(host + '/v2/' + endpoint,
        headers={'Content-Type': 'application/json', 'Authorization': 'DeepL-Auth-Key ' + key},
        data=None if payload is None else json.dumps(payload).encode())
    try:
        with urllib.request.build_opener(urllib.request.ProxyHandler({}), NoRedirect()).open(req, timeout=30) as response:
            return json.load(response)
    except urllib.error.HTTPError as error:
        code = error.code
        error.close()
        raise ValueError(f'DeepL request failed (HTTP {code}); no translations written.') from None
    except urllib.error.URLError:
        raise ValueError('DeepL is unreachable; no translations written.') from None

def fill(config, keys, translations):
    # All responses are validated before writing. Existing translations are preserved.
    import xml.etree.ElementTree as ET
    protected_pattern = re.compile(r'\{\w+\}|Vibe Pompier|Vibe Doctor|Jean Z\. Sordes|Jotlane|Obsidian|https?://\S+')
    for lang, catalog in translations.items():
        missing = sorted(keys - catalog.keys())
        for offset in range(0, len(missing), 30):
            batch = missing[offset:offset + 30]
            texts, protections = [], []
            for source in batch:
                parts, saved, cursor = [], [], 0
                for match in protected_pattern.finditer(source):
                    parts.append(escape(source[cursor:match.start()]))
                    parts.append(f'<keep id="{len(saved)}">{escape(match.group())}</keep>')
                    saved.append(match.group())
                    cursor = match.end()
                parts.append(escape(source[cursor:]))
                texts.append('<text>' + ''.join(parts) + '</text>')
                protections.append(saved)
            response = request(config, 'translate', {'text': texts, 'source_lang': config['source_language'].upper(),
                'target_lang': config['languages'][lang]['deepl_target'], 'tag_handling': 'xml',
                'tag_handling_version': 'v2', 'ignore_tags': ['keep'],
                'context': 'Jean Sordes offers software development, diagnosis, advice and training. Vibe Pompier and Vibe Doctor are service names. Preserve claims and use clear, accessible language.'})
            items = response.get('translations')
            if not isinstance(items, list) or len(items) != len(batch):
                raise ValueError('Invalid DeepL response')
            for source, item, protected in zip(batch, items, protections):
                try:
                    node = ET.fromstring(item['text'])
                    if node.tag != 'text' or node.attrib:
                        raise ValueError('Invalid translation XML')
                    found = []
                    for child in node:
                        identifier = child.get('id', '')
                        if child.tag != 'keep' or set(child.attrib) != {'id'} or not identifier.isdigit() or len(child):
                            raise ValueError('Invalid protected text')
                        i = int(identifier)
                        if i >= len(protected) or child.text != protected[i]:
                            raise ValueError('Changed protected text')
                        found.append(i)
                    if sorted(found) != list(range(len(protected))):
                        raise ValueError('Missing or duplicated protected text')
                    value = ''.join(node.itertext()).strip()
                    validate(source, value)
                    catalog[source] = value
                except (KeyError, TypeError, ET.ParseError):
                    raise ValueError('Invalid DeepL translation') from None
    for lang, catalog in translations.items():
        if lang != config['source_language']:
            atomic_write(ROOT / 'locales' / f'{lang}.json', json.dumps(catalog, ensure_ascii=False, indent=2) + '\n')
    print('Missing translations filled. Review the catalogs, then run build.')

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('command', choices=['check', 'build', 'fill', 'configure', 'usage'])
    args = parser.parse_args()
    config = read_json(ROOT / 'localization.json')
    for lang in config['languages']:
        if not re.fullmatch(r'[a-z]{2,3}(?:-[A-Za-z0-9]+)*', lang):
            raise ValueError('Invalid locale identifier')
    if args.command == 'configure':
        if not sys.stdin.isatty():
            raise ValueError('Run configure in an interactive terminal')
        key = getpass.getpass('DeepL API key (hidden): ').strip()
        if not key or any(c.isspace() for c in key):
            raise ValueError('Invalid API key')
        save_env_key(key)
        print('Key saved in the gitignored project .env (permissions 600).')
        return
    if args.command == 'usage':
        usage = request(config, 'usage')
        print(f"DeepL characters: {usage['character_count']} / {usage['character_limit']}")
        return
    keys, translations = catalogs(config)
    if args.command == 'build':
        build(config, keys, translations)
    elif args.command == 'fill':
        fill(config, keys, translations)
    else:
        problems = check(config, keys, translations)
        if problems:
            raise ValueError('\n'.join(problems))
        print(f'Complete catalogs: {len(keys)} keys, {len(translations)} languages.')

if __name__ == '__main__':
    try:
        main()
    except (OSError, ValueError, KeyError) as error:
        print(f'Localization: {error}', file=sys.stderr)
        sys.exit(1)
