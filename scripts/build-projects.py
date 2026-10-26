#!/usr/bin/env python3
"""Render the editorial catalogue. Stdlib only; output works without JavaScript."""
import json
import hashlib
import xml.etree.ElementTree as ET
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / 'data/projects.json').read_text())
inventory = {p['id']: p for p in data['projects']}
assert len(inventory) == len(data['projects']), 'Duplicate inventory ID'
selection = data['selection']
assert len(selection) == len(set(selection)), 'Duplicate selection ID'
assert selection and all(key in inventory for key in selection), 'Unknown or empty selection'
projects = [inventory[key] for key in selection]
category_order = ['Applications', 'Obsidian', 'Extensions', 'Jeux', 'Développement', 'Sites', 'Expériences']
categories = [category for category in category_order if any(p['category'] == category for p in projects)]
assert len({p['id'] for p in projects}) == len(projects), 'Duplicate project ID'
for p in projects:
    assert p['category'] in categories
    for key in ('url', 'source'):
        assert p[key].startswith('https://'), f'Invalid {key} for {p["id"]}'
e = escape
symbol_path = ROOT / 'assets/projects/symbols.svg'
symbols = {node.attrib['id'] for node in ET.parse(symbol_path).getroot()}
symbol_version = hashlib.sha256(symbol_path.read_bytes()).hexdigest()[:10]
def icon(name):
    assert name in symbols, f'Unknown icon: {name}'
    style = 'fill="currentColor"' if name.startswith('brand-') else 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'
    return f'<svg class="catalog-icon" width="18" height="18" viewBox="0 0 24 24" {style} aria-hidden="true" focusable="false"><use href="../assets/projects/symbols.svg?v={symbol_version}#{e(name)}"></use></svg>'
language_icons = {'JavaScript':'brand-javascript', 'TypeScript':'brand-typescript', 'PHP':'brand-php', 'Python':'brand-python', 'Swift':'brand-swift', 'HTML':'brand-html5', 'CSS':'brand-css', 'SCSS':'brand-sass', 'Java':'ui-coffee', 'Twig':'ui-code-xml'}
cards = []
for p in projects:
    color = category_order.index(p['category']) % 5
    mark = f'<img src="{e(p["image"])}" alt="" width="76" height="76" loading="lazy">' if p.get('image') else icon('ui-' + p['icon'])
    image_class = ' logo-' + p['imageBackground'] if p.get('imageBackground') else ''
    platform = p['platform']
    platform_badge = f'<span class="project-platform">{icon(platform["icon"])}{e(platform["label"])}</span>'
    technologies = ''.join(f'<span class="technology">{icon(language_icons[lang])}{e(lang)}</span>' for lang in p['technologies'])
    technology_row = f'<div class="project-technologies" role="group" aria-label="Langages et technologies">{technologies}</div>' if technologies else ''
    source = f'<a class="source-link" href="{e(p["source"])}" aria-label="Code source de {e(p["name"])}">Code source <span aria-hidden="true">↗</span></a>' if p['url'] != p['source'] and p['id'] != 'jotlane' else ''
    note = f'<p class="project-note">{e(p["note"])}</p>' if p.get('note') else ''
    cards.append(f'''      <article class="project-card tone-{color}" id="{e(p['id'])}" data-project data-category="{e(p['category'])}" aria-labelledby="title-{e(p['id'])}">
        <div class="card-cover"><div class="app-mark{image_class}">{mark}</div>{platform_badge}</div>
        <div class="card-body"><div class="card-meta"><span>{e(p['category'])}</span><span class="status">{e(p['status'])}</span></div>
          <h3 id="title-{e(p['id'])}">{e(p['name'])}</h3>
          <p class="project-description">{e(p['description'])}</p>{note}
          {technology_row}<div class="card-actions"><a class="project-action" href="{e(p['url'])}" aria-label="{e(p['action'])} — {e(p['name'])}">{e(p['action'])} <span aria-hidden="true">↗</span></a>{source}</div>
        </div>
      </article>''')
filters = ''.join(f'<button type="button" data-category-filter="{e(c)}" aria-pressed="false">{e(c)}</button>' for c in categories)
html = '''<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#faf7f0" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#18151d" media="(prefers-color-scheme: dark)">
  <title>Mes projets et applications · Jean Z. Sordes</title>
  <meta name="description" content="Explorez les projets de Jean Sordes : Jotlane pour Mac, plugins Obsidian et outils de développement. Une sélection à télécharger ou à installer.">
  <link rel="canonical" href="https://www.jzs.fr/projets/">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="fr_FR">
  <meta property="og:title" content="Les projets de Jean Z. Sordes">
  <meta property="og:description" content="Une sélection d’applications et de plugins à installer pour prendre des notes et développer.">
  <meta property="og:url" content="https://www.jzs.fr/projets/">
  <meta property="og:image" content="https://www.jzs.fr/assets/jean-sordes-partage-v3.png">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="../assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="../assets/styles.css?v=a34ba470ca">
  <link rel="stylesheet" href="../assets/projects.css?v=__CSS_VERSION__">
  <script src="../assets/projects.js" defer></script>
</head>
<body class="projects-page">
  <a class="skip-link" href="#contenu">Aller au contenu</a>
  <header class="catalog-header catalog-wrap">
    <a class="catalog-brand" href="../"><img class="jean-portrait" src="../assets/jean-sordes-actuel.jpg" width="44" height="44" alt=""><span>Jean Z. Sordes<small>Développeur & créateur d’outils</small></span></a>
    <nav aria-label="Navigation principale"><a href="../">Mes services</a><a href="./" aria-current="page">Mes projets</a><a href="https://github.com/jeansordes">GitHub <span aria-hidden="true">↗</span></a></nav>
  </header>
  <main id="contenu" tabindex="-1" class="catalog-wrap">
    <section class="catalog-intro" aria-labelledby="page-title">
      <div><p class="catalog-eyebrow"><span aria-hidden="true">✳</span> L’atelier de Jean</p><h1 id="page-title">Des idées devenues<br><span>des outils.</span></h1><p>Je développe les outils dont j’ai envie de me servir.<br>Voici une sélection pour capturer vos idées, organiser vos notes et développer.</p></div>
      <a class="collection-sticker" href="#collection"><span aria-hidden="true">↘</span> Faits maison.<br>À explorer.</a>
    </section>
    <section class="featured-project" aria-labelledby="featured-title">
      <div class="featured-copy"><p class="feature-label">À découvrir <span>App Mac · Alpha</span></p><img class="featured-icon" src="../assets/projects/jotlane-icon.svg" width="70" height="70" alt=""><h2 id="featured-title">Jotlane</h2><p class="featured-lead">Gardez l’idée.<br>Reprenez le fil.</p><p>Un raccourci pour envoyer du texte, des images et des liens dans votre inbox Obsidian.</p><a class="catalog-button" href="https://jotlane.jzs.fr/#telecharger">Télécharger pour Mac <span aria-hidden="true">↗</span></a><p class="feature-footnote">Gratuit · macOS 14+ · Intel et Apple Silicon</p></div>
      <div class="featured-preview"><span class="preview-caption">Votre inbox, à une touche près.</span><img src="../assets/projects/jotlane-capture.png" width="1120" height="460" alt="Fenêtre de Jotlane : une capture de texte avec un lien, une image et la destination Inbox."><div class="preview-bottom"><span>Capture vers Obsidian</span><span><kbd>⌃</kbd> <kbd>espace</kbd></span></div></div>
    </section>
    <section class="collection" id="collection" aria-labelledby="collection-title">
      <div class="collection-heading"><div><p class="catalog-eyebrow">Le catalogue</p><h2 id="collection-title">Les projets sélectionnés<span class="total-count">__TOTAL__</span></h2></div><p>Des usages précis, des outils à installer.</p></div>
      <div class="catalog-controls" hidden>
        <div class="search-row"><label class="catalog-search" for="project-search"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><span class="sr-only">Rechercher un projet</span><input id="project-search" type="search" placeholder="Un projet, un usage, une technologie…" autocomplete="off" aria-controls="project-grid"></label><button class="reset-filters" type="button" data-reset hidden>Tout afficher</button></div>
        <div class="category-filters" role="group" aria-label="Filtrer par catégorie"><button type="button" data-category-filter="" aria-pressed="true">Tout explorer</button>__FILTERS__</div>
      </div>
      <div class="results-line"><p id="result-count" role="status" aria-live="polite" aria-atomic="true">__TOTAL__ projets à explorer</p><p>Chaque carte indique comment y accéder.</p></div>
      <div class="project-grid" id="project-grid">
__CARDS__
      </div>
      <div class="empty-results" hidden><span aria-hidden="true">⌕</span><h3>Aucun projet trouvé</h3><p>Essayez un autre mot ou affichez toute la collection.</p><button class="catalog-button" type="button" data-reset>Afficher tous les projets</button></div>
      <p class="catalog-note">Cette sélection présente les outils que je souhaite vous faire découvrir. Retrouvez mes autres travaux sur <a href="https://github.com/jeansordes?tab=repositories">GitHub</a>.</p>
    </section>
    <aside class="catalog-about" aria-labelledby="about-title"><div><p class="catalog-eyebrow">Et derrière ces projets…</p><h2 id="about-title">Jean, tout simplement.</h2><p>Je développe, j’expérimente et j’accompagne aussi les personnes qui construisent leur propre projet.</p></div><a class="catalog-button secondary" href="../">Découvrir mon accompagnement <span aria-hidden="true">↗</span></a></aside>
  </main>
  <footer class="catalog-footer catalog-wrap"><a href="../">Jean Z. Sordes · jzs.fr</a><p>Une sélection qui évolue avec mes projets.</p><a href="https://github.com/jeansordes">Retrouvez-moi sur GitHub <span aria-hidden="true">↗</span></a></footer>
</body>
</html>
'''
html = html.replace('__TOTAL__', str(len(projects))).replace('__FILTERS__', filters).replace('__CARDS__', '\n'.join(cards))
html = html.replace('__CSS_VERSION__', hashlib.sha256((ROOT / 'assets/projects.css').read_bytes()).hexdigest()[:10])
(ROOT / 'templates/projects.html').write_text(html)
print(f'Rendered {len(projects)} projects → templates/projects.html')
