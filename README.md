# Site de Jean Sordes

Page statique en français présentant Jean Sordes, le diagnostic Vibe Doctor et son accompagnement de CTO à temps partagé. HTML et CSS, sans dépendance de production ni étape de compilation.

## Prévisualisation locale

Depuis le dossier du projet :

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Ouvrir `http://127.0.0.1:4173`. La FAQ, la navigation et les liens fonctionnent sans JavaScript.

## Fichiers

- `index.html` : contenu, navigation, FAQ native, métadonnées et liens de réservation.
- `assets/styles.css` : styles, adaptations mobiles et préférence de réduction des mouvements.
- `assets/jean-sordes-actuel.jpg` : photo récente fournie par Jean, encodée en JPEG sans retouche, utilisée dans la présentation, « À propos » et la signature au défilement. L’ancien portrait Gravatar est conservé mais n’est plus affiché.
- `assets/jean-sordes-partage-v3.png` : visuel de partage avec la photo récente, utilisé par Open Graph et la carte de grande taille. Les versions précédentes sont conservées. [Prompt et provenance](docs/visuel-partage.md).
- `assets/identity-scroll.js` : Easter egg limité au sticker du portrait dans « À propos », sans barre fixe. Boucle JZS.fr → Jean Zacharie Sordes → Jean Z. Sordes → Jean, puis retour dans l’autre sens. Les formes lisibles restent fixes pendant 65 % de chaque phase ; les fragments partiellement déployés sont masqués. Avec réduction des mouvements ou sans JavaScript, le sticker reste sur JZS.fr.
- `assets/favicon.svg` : icône du site.
- `CNAME` : domaine GitHub Pages existant, à conserver.
- [Brief](docs/brief-page-services.md) et [PRD](docs/prd-page-services.md) : direction commerciale et exigences de la page.
- [Recette](docs/recette-page-services.md) : contrôles réalisés et raccordement reporté.
- [Sources du parcours et du portfolio](docs/sources-parcours-portfolio.md) : expériences LinkedIn, projets sélectionnés, provenance des captures et indicateurs datés.

## Parcours et portfolio

Les sections présentent une sélection du parcours professionnel de Jean et trois plugins Obsidian. Les captures de Dot Navigator sont conservées dans `assets/portfolio/` ; les autres visuels illustrent le fonctionnement des projets en HTML/CSS. La galerie de renommage utilise un élément `details` natif et reste utilisable sans JavaScript.

Les stars GitHub et téléchargements Obsidian sont un relevé manuel daté, sans requête d’API côté visiteur. Lors d’une mise à jour, vérifier les sources indiquées dans le document de provenance, puis modifier les chiffres et la date dans `index.html` ainsi que ce document. Ne pas assimiler les téléchargements à des utilisateurs actifs.

## Réservation et contenu commercial

Tous les appels à réserver portent l’attribut `data-booking-link`. Leur destination doit rester identique ; le bouton final se trouve dans le bloc identifié par les commentaires `BOOKING:START` et `BOOKING:END`.

Le calendrier fourni est `https://calendar.notion.so/meet/johnsordes/30min`. Jean a confirmé le passage à un échange gratuit de 30 minutes.

Le 11 octobre 2026, Jean a choisi de conserver les boutons et liens externes : le calendrier Notion fourni interdit l’intégration en iframe sur jzs.fr. Aucun calendrier intégré n’est ajouté.

Le lien actuel ne collecte pas la description du blocage. Jean fournira plus tard un calendrier avec un champ obligatoire « Projet ou blocage ». En attendant, le site invite à préparer le contexte pour l’échange. Ce remplacement est le seul raccordement fonctionnel reporté.

Pour connecter le nouveau calendrier : vérifier ses 30 minutes et son champ obligatoire, remplacer les cinq destinations `data-booking-link`, adapter le nom du prestataire et le texte `booking-prompt`, puis vérifier le formulaire et sa confirmation. Ne pas ajouter de formulaire local qui ferait croire qu’une description est transmise.

Le calendrier doit correspondre à la durée annoncée et au parcours de collecte du contexte convenu avec Jean. Le site ne conserve aucune donnée de formulaire, ne charge aucun calendrier intégré et n’ajoute aucun outil de mesure. La réservation est traitée par le prestataire externe.

Le diagnostic comprend une analyse cadrée, une restitution et un plan priorisé. Les corrections sont séparées. Les prix, délais, engagements et expériences non confirmés ne doivent pas être ajoutés comme des promesses acquises.

## Mise en ligne

Le dépôt conserve son fonctionnement statique pour GitHub Pages. Aucune publication n’est déclenchée par la prévisualisation locale. Vérifier le parcours de réservation et les informations publiques avant une mise en ligne demandée par Jean.
