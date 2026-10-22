# Site de Jean Sordes

Page statique en français présentant Jean Sordes avec « Face à l’IA, vous n’êtes plus seul », **Vibe Pompier** pour la réparation et **Vibe Doctor** pour le diagnostic et le suivi. HTML et CSS, sans dépendance de production ni étape de compilation.

## Prévisualisation locale

Depuis le dossier du projet :

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Ouvrir `http://127.0.0.1:4173`. La FAQ, la navigation et les liens fonctionnent sans JavaScript.

## Fichiers

- `index.html` : contenu, navigation, FAQ native, métadonnées et liens de réservation.
- `assets/styles.css` : styles, adaptations mobiles et préférence de réduction des mouvements.
- `assets/lucide.svg` : icônes Lucide dans un sprite local, utilisable sans JavaScript ; licence dans `assets/LUCIDE-LICENSE`. [Provenance et usage](docs/icones-lucide.md).
- `assets/jean-sordes-actuel.jpg` : photo récente fournie par Jean, encodée en JPEG sans retouche, utilisée dans le header, la présentation, « À propos » et la signature au défilement. L’ancien portrait Gravatar est conservé mais n’est plus affiché.
- `assets/jean-sordes-partage-v3.png` : visuel de partage avec la photo récente, utilisé par Open Graph et la carte de grande taille. Les versions précédentes sont conservées. [Prompt et provenance](docs/visuel-partage.md).
- `assets/portfolio-carousel.js` : carrousel manuel du portfolio, boutons précédent/suivant, sélection des projets, clavier, compteur annoncé et adaptation de la hauteur aux détails ouverts. Aucun défilement automatique.
- `assets/television.js` : ouverture d’un lecteur YouTube flottant dans une boîte de dialogue après un clic, aux timestamps fournis par Jean. Les liens directs restent disponibles sans JavaScript. Aucun lecteur externe ne se charge à l'ouverture de la page.
- `assets/media/` : captures des passages de Jean fournies le 12 octobre 2026, recadrées sans les bandes noires latérales et réduites en WebP pour les stickers. Les anciennes vignettes officielles sont conservées mais ne sont plus affichées.
- `assets/logos/` : logos de MolenGeek, Holberton et Capgemini, affichés comme petites icônes dans « À propos », avec des liens vers le profil LinkedIn de Jean. [Sources et attribution](docs/sources-parcours-portfolio.md#logos-et-passages-tv--1112-octobre-2026).
- `assets/section-navigation.js` : suivi de la section consultée, état `aria-current` et hauteur des ancres ajustée à la navigation persistante. Les raccourcis Vibe Pompier, Vibe Doctor et Conférences et formations restent visibles dès l’accueil, avec ou sans JavaScript. Le header compact regroupe les trois offres sur une même ligne ; la réservation reste sur la ligne d’identité sur mobile, avec le portrait de Jean. Les liens restent natifs sans JavaScript.
- `assets/identity-scroll.js` : Easter egg limité au sticker du portrait dans « À propos ». La boucle JZS.fr → Jean Zacharie Sordes → Jean Z. Sordes → Jean, puis retour dans l’autre sens, tient dans l’espace visible sous la navigation persistante. Les formes lisibles restent fixes pendant 65 % de chaque phase ; les fragments partiellement déployés sont masqués. Avec réduction des mouvements ou sans JavaScript, le sticker reste sur JZS.fr.
- `assets/favicon.svg` : icône du site.
- `CNAME` : domaine GitHub Pages existant, à conserver.
- [Brief](docs/brief-page-services.md) et [PRD](docs/prd-page-services.md) : direction commerciale et exigences de la page.
- [Recette](docs/recette-page-services.md) : contrôles réalisés et raccordement reporté.
- [Sources du parcours et du portfolio](docs/sources-parcours-portfolio.md) : expériences LinkedIn, projets sélectionnés, provenance des captures et indicateurs datés.

## Parcours et portfolio

Les sections présentent une sélection du parcours professionnel de Jean et trois plugins Obsidian. Le portfolio montre un projet à la fois dans un carrousel manuel avec défilement tactile natif, sélection par nom, boutons précédent/suivant et compteur. Lorsque la galerie a le focus, les flèches, Début et Fin changent le projet. Sans JavaScript, le défilement natif et les liens vers chacun des trois projets conservent tous les contenus accessibles. Les changements sont annoncés aux lecteurs d’écran et les contrôles gardent leur focus, conformément aux [principes WAI pour les carrousels](https://www.w3.org/WAI/tutorials/carousels/). Le parcours détaillé est accessible sur LinkedIn via les logos et le lien de présentation. Les détails des contributions, liens et indicateurs des projets sont repliables avec des éléments `details` natifs. Les captures de Dot Navigator sont conservées dans `assets/portfolio/` ; les autres visuels illustrent le fonctionnement des projets en HTML/CSS. La galerie de renommage utilise un élément `details` natif et reste utilisable sans JavaScript.

Les stars GitHub et téléchargements Obsidian sont un relevé manuel daté, sans requête d’API côté visiteur. Lors d’une mise à jour, vérifier les sources indiquées dans le document de provenance, puis modifier les chiffres et la date dans `index.html` ainsi que ce document. Ne pas assimiler les téléchargements à des utilisateurs actifs.

## Réservation et contenu commercial

Tous les appels à réserver portent l’attribut `data-booking-link`. Leur destination doit rester identique ; le bouton final se trouve dans le bloc identifié par les commentaires `BOOKING:START` et `BOOKING:END`.

Le calendrier fourni est `https://calendar.notion.so/meet/johnsordes/30min`. Jean a confirmé le passage à un échange gratuit de 30 minutes.

Le 11 octobre 2026, Jean a choisi de conserver les boutons et liens externes : le calendrier Notion fourni interdit l’intégration en iframe sur jzs.fr. Aucun calendrier intégré n’est ajouté.

Le lien actuel ne collecte pas la description du blocage. Jean fournira plus tard un calendrier avec un champ obligatoire « Projet ou blocage ». En attendant, le site invite à préparer le contexte pour l’échange. Ce remplacement est le seul raccordement fonctionnel reporté.

Pour connecter le nouveau calendrier : vérifier ses 30 minutes et son champ obligatoire, remplacer toutes les destinations `data-booking-link`, adapter le nom du prestataire et le texte `booking-prompt`, puis vérifier le formulaire et sa confirmation. Ne pas ajouter de formulaire local qui ferait croire qu’une description est transmise.

Le calendrier doit correspondre à la durée annoncée et au parcours de collecte du contexte convenu avec Jean. Le site ne conserve aucune donnée de formulaire, ne charge aucun calendrier intégré et n’ajoute aucun outil de mesure. La réservation est traitée par le prestataire externe.

La dernière orientation de Jean conserve deux offres : **Vibe Pompier**, qui comprend les corrections du blocage convenu, et **Vibe Doctor — diagnostic et suivi**, pour comprendre les besoins et les opportunités, choisir les priorités, planifier et suivre leur mise en œuvre avec conseil et coaching, notamment les usages utiles de l’IA. Les choix sont grands, gras, illustrés par des emojis et différenciés en rouge et bleu. Vibe Doctor accompagne dans la durée ; cette offre ne se limite pas au diagnostic ponctuel de la V1. Le rôle de CTO peut éclairer le parcours professionnel, sans constituer une troisième offre ni l’intitulé commercial principal. Jean mène le travail technique ; le client apporte le contexte et participe aux échanges et à la validation. Le dirigeant conserve les décisions. Le prix, le résultat et le calendrier sont convenus avant engagement. Le délai de sept jours et une éventuelle garantie ne sont pas affichés : leurs modalités restent à définir. Aucun widget ni webinaire disponible n’est annoncé.

## Conférences, formations et passages à la télévision

Les conférences et formations disposent d’un bouton dans le header et d’une carte violette dans les choix d’accueil, au même niveau que Vibe Pompier et Vibe Doctor. Leur section suit les deux offres et conserve les passages BX1 ainsi que le lien de contact LinkedIn.

Les vidéos fournies par Jean sont publiées par BX1 et intitulées **Bonsoir Bruxelles** : 5 juin 2026 (départ à 40:30, `start=2430`) et 17 avril 2026 (départ à 38:00, `start=2280`). Les deux captures sont présentées sous forme de stickers dans un bloc compact qui indique aussi la disponibilité de Jean pour des conférences et interventions sur l’IA. Les lecteurs flottants sont chargés sur `youtube-nocookie.com` uniquement après activation du sticker ; les liens vers YouTube conservent les timestamps. La lecture automatique éventuelle suit ce clic, jamais l’ouverture de la page. Le lecteur se ferme par le bouton, Échap ou un clic sur le fond extérieur ; sa fermeture supprime l’iframe pour arrêter la lecture et rend le focus au sticker. Sans JavaScript, les stickers ouvrent les liens YouTube.

Les métadonnées de l'API oEmbed de YouTube confirment les titres, dates et auteur BX1. La lecture distante est bloquée par un contrôle anti-bot dans l'environnement d'audit : l'interface et les paramètres ont été vérifiés, mais le contenu des passages et la lecture réelle restent à contrôler dans un navigateur habituel. Les sources et limites sont documentées dans le relevé lié ci-dessus.

## Mise en ligne

Le dépôt conserve son fonctionnement statique pour GitHub Pages. Aucune publication n’est déclenchée par la prévisualisation locale. Vérifier le parcours de réservation et les informations publiques avant une mise en ligne demandée par Jean.

La section formation présente le rôle de Jean chez MolenGeek : conception du contenu et accompagnement des apprenants jusqu’au titre professionnel de niveau bac+2. Les compétences pédagogiques et le programme de référence sont documentés dans [les sources du parcours](docs/sources-parcours-portfolio.md).
