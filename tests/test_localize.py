import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('localize', Path(__file__).parents[1] / 'scripts/localize.py')
i18n = importlib.util.module_from_spec(spec)
spec.loader.exec_module(i18n)

class LocalizationTests(unittest.TestCase):
    def test_project_env_preserves_other_variables_and_is_private(self):
        with tempfile.TemporaryDirectory() as folder, patch.object(i18n, 'ROOT', Path(folder)):
            path = Path(folder) / '.env'
            path.write_text('# Local settings\nOTHER=value\nexport DEEPL_API_KEY="old"\n')
            i18n.save_env_key('test-key:fx')
            self.assertIn('OTHER=value', path.read_text())
            self.assertEqual(path.read_text().count('DEEPL_API_KEY='), 1)
            self.assertEqual(path.stat().st_mode & 0o777, 0o600)
            with patch.dict(i18n.os.environ, {'DEEPL_API_KEY': ''}):
                self.assertEqual(i18n.api_key(), 'test-key:fx')
            with patch.dict(i18n.os.environ, {'DEEPL_API_KEY': 'environment-key'}):
                self.assertEqual(i18n.api_key(), 'environment-key')

    def test_dotenv_parsing_does_not_expand_shell_syntax(self):
        with tempfile.TemporaryDirectory() as folder, patch.object(i18n, 'ROOT', Path(folder)):
            path = Path(folder) / '.env'
            path.write_text('export DEEPL_API_KEY="literal-$VARIABLE-$(command)" # comment\n')
            self.assertEqual(i18n.env_key(), 'literal-$VARIABLE-$(command)')
            path.write_text('DEEPL_API_KEY="unterminated-secret\n')
            with self.assertRaisesRegex(ValueError, '^Invalid DEEPL_API_KEY entry in .env$'):
                i18n.env_key()

    def setUp(self):
        self.config = i18n.read_json(i18n.ROOT / 'localization.json')

    def test_catalogs_cover_both_pages_and_dynamic_strings(self):
        keys, catalogs = i18n.catalogs(self.config)
        self.assertEqual(i18n.check(self.config, keys, catalogs), [])
        catalogs['en'].pop('Aller au contenu')
        self.assertTrue(i18n.check(self.config, keys, catalogs))

    def test_escaped_copy_and_assets_are_safe(self):
        page = i18n.Page('projets/', 'en', self.config, {'Une image': 'An "image" <safe>', 'A & B': 'C & D'})
        page.feed('<p>A &amp; B</p><img alt="Une image" src="../assets/test.png"><a href="../#portfolio">1</a>')
        result = ''.join(page.output)
        self.assertIn('C &amp; D', result)
        self.assertIn('alt="An &quot;image&quot; &lt;safe&gt;"', result)
        self.assertIn('src="/assets/test.png"', result)
        self.assertIn('href="/en/#portfolio"', result)

    def test_build_matches_committed_output(self):
        keys, catalogs = i18n.catalogs(self.config)
        with patch.object(i18n, 'atomic_write') as write:
            i18n.build(self.config, keys, catalogs)
        self.assertEqual(write.call_count, 7)
        for call in write.call_args_list:
            path, text = call.args
            self.assertEqual(path.read_text(), text, str(path))

    def test_placeholders_cannot_be_lost(self):
        with self.assertRaises(ValueError):
            i18n.validate('{count} projets', 'Projects')
        i18n.validate('{count} projets', '{count} projects')

    def test_complete_fill_is_offline(self):
        keys, catalogs = i18n.catalogs(self.config)
        with patch.object(i18n, 'request') as request, patch.object(i18n, 'atomic_write'):
            i18n.fill(self.config, keys, catalogs)
        request.assert_not_called()

    def test_fill_preserves_existing_and_protected_copy(self):
        keys = {'Jotlane : {count} projets', 'Existant'}
        catalogs = {'fr': {k: k for k in keys}, 'en': {'Existant': 'Existing'}}
        result = {'translations': [{'text': '<text><keep id="0">Jotlane</keep>: <keep id="1">{count}</keep> projects</text>'}]}
        with patch.object(i18n, 'request', return_value=result), patch.object(i18n, 'atomic_write') as write:
            i18n.fill(self.config, keys, catalogs)
        saved = json.loads(write.call_args.args[1])
        self.assertEqual(saved['Existant'], 'Existing')
        self.assertEqual(saved['Jotlane : {count} projets'], 'Jotlane: {count} projects')

    def test_invalid_api_response_never_writes_catalogs(self):
        for text in ['<text>Lost protected names</text>', '<text><keep id="0">Wrong</keep></text>', '<invalid/>']:
            with self.subTest(text=text), patch.object(i18n, 'request', return_value={'translations': [{'text': text}]}), patch.object(i18n, 'atomic_write') as write:
                with self.assertRaises(ValueError):
                    i18n.fill(self.config, {'Jotlane'}, {'fr': {'Jotlane': 'Jotlane'}, 'en': {}})
                write.assert_not_called()

    def test_duplicate_keys_are_rejected(self):
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / 'en.json'
            path.write_text('{"key":"a", "key":"b"}')
            with self.assertRaises(ValueError):
                i18n.read_json(path)

    def test_internal_links_and_assets_exist(self):
        from html.parser import HTMLParser
        from urllib.parse import urlsplit
        class Links(HTMLParser):
            def __init__(self):
                super().__init__()
                self.paths = []
            def handle_starttag(self, tag, attrs):
                for key, value in attrs:
                    if key in ('src', 'href') and value.startswith('/'):
                        self.paths.append(urlsplit(value).path)
        for lang in ('fr', 'en'):
            for route in ('', 'projets/'):
                page = Links()
                page.feed((i18n.ROOT / lang / route / 'index.html').read_text())
                for path in page.paths:
                    # Existing external demo hosted on the same domain, not in this repo.
                    if path == '/angular-webapp-exercice/':
                        continue
                    target = i18n.ROOT / path.lstrip('/')
                    self.assertTrue(target.exists(), path)

if __name__ == '__main__':
    unittest.main()
