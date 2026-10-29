# Traductions du site

Le site dispose de versions françaises et anglaises pour l’accueil et la sélection de projets. L’anglais est la langue de repli. Les textes d’accessibilité, métadonnées, contrôles de recherche, compteur du carrousel et titres du lecteur vidéo sont traduits. Les noms propres, noms de projets et marques restent inchangés ; les captures d’écran et vidéos conservent leur langue originale.

## Langue du visiteur

- `/` et `/projets/` détectent la première langue prise en charge dans `navigator.languages`, dans l’ordre de préférence. `fr-CA` et `fr-BE` utilisent le français ; `en-US` et `en-GB` utilisent l’anglais. Si aucune ne correspond, le site utilise l’anglais.
- Le sélecteur discret affiche l’icône Lucide `languages` et le code de la langue active (FR / EN). Son menu déroulant natif fonctionne aussi sans JavaScript ; avec JavaScript, Échap ferme le menu et rend le focus au contrôle, et un clic ou un déplacement du focus à l’extérieur le ferme.
- Avec JavaScript, l’option automatique est fusionnée avec la langue retenue par le navigateur : « Français — Langue du navigateur » ou « English — Browser default ». Le menu affiche donc une seule ligne par langue. Choisir cette ligne efface la préférence manuelle ; les prochaines visites aux URL neutres suivent de nouveau le navigateur. Sans préférence enregistrée, ce comportement est le défaut. Les variantes régionales et le repli anglais sont pris en compte dans le libellé.
- Le choix manuel de l’autre langue est enregistré dans `localStorage` sous `jzs.language` et devient prioritaire lors des prochaines visites aux URL neutres. La ligne annotée comme langue du navigateur efface ce choix.
- `/fr/`, `/en/`, `/fr/projets/` et `/en/projets/` affichent toujours la langue de l’URL, pour permettre le partage et l’indexation. Suivre une URL explicite ne modifie pas la préférence enregistrée.
- Les liens internes restent dans la langue consultée. Le changement de langue conserve les paramètres et l’ancre de la page.
- Si le stockage est désactivé, les liens de langue et la navigation fonctionnent toujours, sans mémorisation entre visites.
- Sans JavaScript, les URL neutres affichent l’anglais et les liens Français / English donnent accès aux pages traduites. Un hébergement purement statique ne peut pas lire la préférence du navigateur sans JavaScript.

Les pages contiennent leur texte complet : aucune API n’est sollicitée par les visiteurs. Chaque version dispose de `lang`, canonical, Open Graph et liens `hreflang` réciproques, avec les URL neutres comme `x-default`.

## Sources et génération

- `templates/home.html` : source éditoriale française de l’accueil.
- `scripts/build-projects.py` et `data/projects.json` : source du catalogue ; génèrent `templates/projects.html`.
- `locales/en.json` : traductions anglaises. Les clés sont les textes français normalisés (espaces et retours à la ligne réunis). Une modification du texte français crée donc une nouvelle clé à traduire.
- `localization.json` : langues activées, libellés, codes DeepL et langue de repli.
- `scripts/localize.py` : extraction, contrôle de couverture et génération HTML, Python standard uniquement.
- `assets/language.js` : détection et préférence ; `assets/language.css` : sélecteur de langue.
- `assets/i18n-config.js` : configuration générée des langues et des messages dynamiques.

Ne pas modifier directement `index.html`, `projets/index.html`, `fr/**/index.html`, `en/**/index.html` ou `assets/i18n-config.js` : ils sont générés et versionnés pour GitHub Pages.

Après une modification :

```sh
python3 scripts/build-projects.py
python3 scripts/localize.py check
# Compléter les traductions manquantes dans locales/en.json, ou utiliser fill.
python3 scripts/localize.py build
python3 -m unittest discover -s tests -p 'test_*.py'
```

`check` et `build` échouent si une traduction manque, est vide ou modifie les paramètres `{count}`, `{current}`, `{total}`, `{name}`. Les anciennes clés inutilisées peuvent être supprimées après revue. Les traductions sont échappées comme du texte, jamais injectées comme du HTML. Les identifiants, ancres, noms de catégories utilisés par les filtres et destinations externes ne sont pas traduits.

Versionner sources, catalogues et résultats générés ensemble. Il n’y a ni compilation sur l’hébergement, ni hook Git installé, ni publication automatique ajoutée par cette modification.

## DeepL, comme dans Jotlane

Le fonctionnement s’inspire du script et de la [documentation de localisation de Jotlane](https://github.com/jeansordes/jotlane/blob/main/docs/localization.md) : appels DeepL au développement uniquement, complétion des entrées manquantes et contrôle avant écriture. Cette première traduction anglaise a été rédigée sans appel DeepL ; aucune clé n’était disponible dans cet environnement.

Pour configurer une clé API DeepL, dans un terminal interactif :

```sh
python3 scripts/localize.py configure
python3 scripts/localize.py usage
python3 scripts/localize.py fill
python3 scripts/localize.py check
python3 scripts/localize.py build
```

`configure` demande la clé sans l’afficher et la sauvegarde dans le fichier `.env` du projet, ignoré par Git, sous `DEEPL_API_KEY`, avec les permissions 600. Les autres variables du fichier sont préservées. La variable d’environnement `DEEPL_API_KEY` est prioritaire ; à défaut, le script consulte `.env`, puis les anciens fichiers `~/.config/jzs.fr/deepl-api-key` et `~/.config/jotlane/deepl-api-key`. Le fichier `.env` est lu sans exécuter de commandes ni développer de variables. Il reste local et ne doit pas être copié vers l’hébergement statique. Ne jamais placer une clé dans les fichiers publics ou dans une commande versionnée.

Le mode `auto` utilise l’API Free pour une clé terminée par `:fx`, Pro sinon. Il peut être remplacé par `free` ou `pro` dans la configuration. L’usage dépend du quota et du tarif de votre compte DeepL.

`fill` envoie uniquement le texte public manquant et un contexte fixe de présentation du site. Il préserve les traductions existantes. Les noms de services, certaines marques, URL et paramètres sont protégés par des balises XML dont le retour est vérifié. Une réponse invalide ou un échec API interrompt l’opération avant toute écriture de catalogue. Les requêtes HTTPS ont un délai de 30 secondes ; les redirections sont refusées et les erreurs n’affichent ni clé ni corps de réponse. Les catalogues complets ne nécessitent aucun accès réseau.

Relire les traductions avant génération/publication, en particulier les engagements commerciaux et les phrases coupées par des balises HTML. [Référence de l’API DeepL](https://developers.deepl.com/api-reference/translate/request-translation).

## Ajouter une langue

1. Ajouter son code, son libellé natif, `deepl_target` et `og_locale` dans `localization.json`.
2. Créer `locales/<code>.json` avec les traductions des clés françaises, ou lancer `fill` avec une clé configurée. Le français reste la source éditoriale de toutes les langues.
3. Exécuter `check` puis `build` : les nouvelles pages, liens alternatifs et options du sélecteur sont générés automatiquement.
4. Relire dans cette langue et vérifier les petits écrans, pluriels et variantes régionales. Les langues avec plusieurs écritures ou des règles de pluriel supplémentaires nécessitent une adaptation explicite de la correspondance des préférences et des messages de comptage.

## Vérifications réalisées

- 11 tests Python : couverture intégrale (395 clés), paramètres, échappement HTML, fichiers générés à jour, liens locaux, clés dupliquées, complétion hors ligne et validation de réponses DeepL simulées, dont absence d’écriture sur réponse invalide.
- Chromium via `tests/language.cjs` : français régional, anglais régional, ordre des préférences, langue non prise en charge, liens explicites, mémorisation et réinitialisation, stockage interdit et JavaScript désactivé.
- Accueil et catalogue dans les deux langues aux largeurs 320, 390, 768 et 1440 px ; images présentes et absence de débordement horizontal. Recherche traduite et insensible aux accents, filtres, résultat vide, remise à zéro, annonces du carrousel, titres du lecteur vidéo et métadonnées contrôlés.
- Le 26 octobre 2026, clé DeepL configurée hors dépôt (permissions 600), authentification et appel réel de traduction validés sur une courte chaîne de test. Le nom Vibe Doctor et le paramètre `{count}` ont été conservés. Les catalogues du site n’ont pas été modifiés par ce test. Copies temporaires du secret supprimées ; aucune publication effectuée.

Pour rejouer les tests navigateur, servir le dépôt sur le port 4178 et utiliser une installation de Playwright avec Chromium :

```sh
python3 -m http.server 4178 --bind 127.0.0.1
# Dans un autre terminal :
PLAYWRIGHT_MODULE=/chemin/vers/node_modules/playwright node tests/language.cjs
```

`SITE_URL` permet de changer l’adresse du serveur de test. Playwright est un outil de recette, pas une dépendance de production.

## Actualisation — 26 octobre 2026

Les pages ont été régénérées à partir des sources actuelles : accueil et sélection de cinq projets, 395 clés couvertes en français et anglais. Aucun texte manquant : la complétion n’a nécessité aucun nouvel appel DeepL.
