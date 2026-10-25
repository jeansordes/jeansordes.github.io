# Catalogue de projets

Page : `/projets/`. Relevé des sources publiques : **25 octobre 2026**.

## Choix validés

Page dédiée sur le site existant, portfolio exhaustif, identité visuelle de jzs.fr avec une présentation de catalogue, cartes menant directement aux projets, ajout éditorial. Aucun compte, paiement ou synchronisation automatique avec GitHub.

La page conserve le HTML/CSS statique du site. Les 47 cartes sont présentes dans le document initial. Le JavaScript ajoute seulement la recherche (insensible aux accents et à la casse, tous les mots recherchés doivent correspondre) et les filtres de catégorie combinables avec la recherche. Sans JavaScript, tous les projets et liens sont disponibles et les contrôles interactifs sont masqués. Aucun appel API ou chargement de police externe côté visiteur.

## Sources et critères

- [Dépôts publics de jeansordes](https://api.github.com/users/jeansordes/repos?per_page=100&sort=updated) : 46 dépôts hors forks. Chaque dépôt figure dans le catalogue, y compris les exercices, templates, dépôts de travail et le dépôt vide Grader. Un dépôt non archivé n'est pas assimilé à un logiciel maintenu. Les descriptions s'appuient sur les métadonnées publiques et les README lorsqu'ils apportent une information spécifique au projet.
- [Jotlane](https://jotlane.jzs.fr/) : application native Mac, gratuite, capture de texte, images et liens vers Obsidian, macOS 14+, Intel et Apple Silicon. Le site annonce l'alpha 0.2.1 et un installateur .pkg. Le catalogue renvoie à `#telecharger`, sans figer la version ou le nom du binaire. Aucun dépôt public correspondant n'a été identifié ; aucun lien de code n'est inventé.
- [Registre officiel Obsidian](https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugins.json) : identifiants confirmés `dot-navigator`, `auto-expander` et **`workflow-boards`** (différent du nom du dépôt `obsidian-workflow-boards`). Les liens vont aux fiches Obsidian. Le registre précise que ces plugins n'ont pas été revus manuellement par l'équipe Obsidian ; le catalogue ne revendique aucune certification.
- [Rename Wizard](https://github.com/jeansordes/rename-wizard) : dépôt archivé ; le README annonce son abandon au profit de Dot Navigator. La carte conserve le code et propose le successeur.
- [Better Geoportail](https://github.com/jeansordes/better-geoportail) : installation manuelle décrite dans le README, aucun lien Chrome Web Store inventé.
- [aio](https://github.com/jeansordes/aio) : workflows YAML d'orchestration d'agents IA ; lien vers les instructions d'installation du projet.
- [Screen](https://github.com/jeansordes/screen.jzs.fr) et [Covoiturage Chorale](https://github.com/jeansordes/test-chorale) : prototypes documentés, liens vers le code et non vers des instances privées ou une administration.
- Les README de Since PWA, Young's Slits Explorer et Show Hidden Folders ne suffisent pas à promettre une application finalisée : texte limité à ce qui est vérifiable, statut de prototype, expérience ou dépôt de travail.
- Les bases issues de Strapi et de l'exemple Obsidian sont explicitement étiquetées « Template » : absence de fork GitHub ne signifie pas conception originale intégrale.

### Vérification des destinations web

- Jotlane : page publique lue après accès réseau hors sandbox.
- [Calculette Angular](https://calculette-angular.netlify.app/) : réponse 200, titre « TP1 par Jean Sordes » et application Angular ; URL HTTPS actuelle du site indiqué dans le README.
- [WebApp Angular](https://www.jzs.fr/angular-webapp-exercice/) : réponse 200, titre « WebAppExercice », base et bundles Angular correspondants. Utilisation de l'URL HTTPS canonique après redirection de GitHub Pages.
- Entrep Ensemble : résolution DNS impossible sur le domaine nu et `www` lors du contrôle ; carte orientée vers le code public.
- Ancienne démonstration Alten sur Vercel : 404 ; carte orientée vers le code.
- `play.jzs.fr` : réponse 200 mais simple « Hello World », pas de catalogue jouable. L'URL GitHub Pages candidate du morpion renvoie 404. Ces deux cartes pointent vers leurs dépôts.

Une réponse HTTP et un document correspondent à un lien de démonstration, pas à une validation complète des fonctionnalités de l'ancien projet. Aucun compteur de téléchargements ou de popularité n'est affiché. Le total 47 compte les entrées du catalogue, pas des applications finalisées.

## Visuels

- `assets/projects/jotlane-capture.png` : copie inchangée de [la capture publique Jotlane](https://jotlane.jzs.fr/capture.png), inspectée visuellement, 1120 × 460.
- `assets/projects/jotlane-icon.svg` : copie inchangée de [l'icône publique Jotlane](https://jotlane.jzs.fr/app-icon.svg).
- Les autres cartes utilisent des monogrammes typographiques sur fonds colorés. Ce sont des repères de catalogue, pas des logos officiels ou de fausses captures.
- Portrait de Jean et styles de base réutilisés depuis le site existant. Styles du catalogue isolés dans `assets/projects.css` ; aucune modification des styles de l'accueil pour cette tâche.

## Mise à jour éditoriale

1. Modifier `data/projects.json` : nom, description, catégorie, statut, plateforme, monogramme, source et destination de l'action. Ajouter une note courte si nécessaire. `id` est unique et sert d'ancre partageable.
2. Vérifier la documentation et la destination. Réserver « Télécharger », « Installer », « Essayer » ou « Visiter » aux accès correspondants ; conserver « Voir le code » si la disponibilité de l'application n'est pas établie.
3. Exécuter `python3 scripts/build-projects.py` depuis le dépôt (ou avec son chemin absolu). Python standard uniquement. Le script valide les identifiants, les catégories et les URL HTTPS, puis échappe les textes HTML.
4. Versionner les données **et** `projets/index.html`. GitHub Pages sert le résultat déjà généré ; aucune nouvelle étape de compilation ou dépendance de production.
5. Prévisualiser et vérifier les liens et filtres. Mettre à jour ce relevé pour les nouvelles sources.

Le gabarit éditorial et le bloc Jotlane figurent dans le script. Le compteur et les cartes dérivent du même fichier de données. Ne pas éditer directement le HTML généré.

## Recette

- Chromium : 320, 390, 768 et 1440 px, thèmes clair et sombre ; aucun débordement horizontal.
- 47 cartes accessibles, y compris sans JavaScript ; contrôles masqués dans ce cas.
- Recherche accentuée/non accentuée, filtre Obsidian (6 entrées), recherche et filtre combinés, aucun résultat, remise à zéro et retour du focus dans la recherche.
- Lien du portfolio d'accueil vers le catalogue et lien d'installation Workflow Boards.
- Audit axe : aucune violation détectée sur les règles WCAG 2 A/AA et 2.1 AA, dans les deux thèmes. Cet audit automatisé ne remplace pas une évaluation humaine complète.
- Captures ordinateur et mobile inspectées ; aucune erreur JavaScript pendant la recette.

Publication : GitHub Pages sert la branche `main`, à la racine du dépôt. Le catalogue est accessible à `https://www.jzs.fr/projets/`.

## Icônes, plateformes et technologies — 26 octobre 2026

Les visuels existants ont été recherchés dans l’arbre de chacun des 46 dépôts publics. Les copies locales suivantes reprennent les assets des projets :

| Projet | Source publique |
| --- | --- |
| Since PWA | `jeansordes/since-pwa`, `main`, `public/icon-192.svg` |
| Entrep Ensemble | `jeansordes/entrep-ensemble.fr`, `main`, `logo-entrep-ensemble.png` |
| Better Geoportail | `jeansordes/better-geoportail`, `main`, `icons/icon128.png` |
| Confort Maison Occitanie | `jeansordes/confort-maison-occitanie`, `master`, `public/img/logo-cmo-simple.png` |
| Duck Coin Coin | `jeansordes/dcc`, `master`, `src/dcc/duck_icon.png` |

Jotlane conserve son icône existante et JZS.fr reprend son favicon. Les favicons génériques de frameworks et les logos d’entreprises tierces présents dans des exercices n’ont pas été présentés comme des identités propres aux projets. Aucun asset raster n’a été retouché ; les proportions sont conservées avec `object-fit: contain`. Les fonds blancs/sombres rendent les identités originales lisibles dans les deux thèmes.

Pour les autres projets, les monogrammes sont remplacés par des pictogrammes fonctionnels Lucide (pas de nouveaux logos officiels). Dot Navigator déclare `TREE_VIEW_ICON = 'folder-git-2'` dans `src/types.ts` : ce symbole est réutilisé. Pour Auto Expander et Workflow Boards, aucune icône propre n’a été identifiée dans les points d’entrée consultés : pictogrammes de saisie et de colonnes.

Le sprite local `assets/projects/symbols.svg` contient :

- Lucide, instantané `70562c1ee1c4fdcf736fe97bc893fb8511927934`, licence déjà conservée dans `assets/LUCIDE-LICENSE`.
- [Simple Icons](https://github.com/simple-icons/simple-icons/tree/90646e4bf7f3b89df6c37e65baf3e7bc759a517c), instantané `90646e4bf7f3b89df6c37e65baf3e7bc759a517c`, licence CC0 conservée dans `assets/projects/SIMPLE-ICONS-LICENSE`. Marques de plateformes et de langages présentées en monochrome, accompagnées de leur nom.

La plateforme est désormais un objet `platform: {icon, label}`. Elle désigne le contexte d’utilisation : Web, macOS, Obsidian, Chrome, WordPress, Discord, Telegram, CLI ou serveur. Pour les dépôts sans plateforme déterminée, le badge indique « Code source ».

`technologies` contient jusqu’à trois langages/technologies réellement présents dans les statistiques GitHub `/repos/jeansordes/{repo}/languages`, hors scripts auxiliaires et fichiers d’outillage. Jotlane utilise Swift d’après son site public. Les données GitHub sont un relevé de fichiers, pas une mesure du niveau de compétence ou de la part personnelle de code écrite. Le dépôt Screen actuel contient du JavaScript/HTML/CSS malgré un README plus ancien décrivant Python : les badges suivent le code public actuel. HTML, CSS et SCSS sont regroupés sous le libellé accessible « Langages et technologies ».

Chaque badge conserve un texte visible. Les SVG sont décoratifs (`aria-hidden`) et ne remplacent pas les libellés. Les références de symboles sont validées à la génération. Une empreinte de contenu dans l’URL du sprite et de la feuille CSS évite de garder d’anciens assets après publication.
