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
