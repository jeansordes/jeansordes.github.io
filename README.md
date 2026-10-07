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
- `assets/jean-sordes.jpg` : portrait provenant de l’image Gravatar déjà utilisée sur le site, conservé localement et optimisé.
- `assets/favicon.svg` : icône du site.
- `CNAME` : domaine GitHub Pages existant, à conserver.
- [Brief](docs/brief-page-services.md) et [PRD](docs/prd-page-services.md) : direction commerciale et exigences de la page.
- [Recette](docs/recette-page-services.md) : contrôles réalisés et raccordement reporté.

## Réservation et contenu commercial

Tous les appels à réserver portent l’attribut `data-booking-link`. Leur destination doit rester identique ; le bouton final se trouve dans le bloc identifié par les commentaires `BOOKING:START` et `BOOKING:END`.

Le calendrier fourni est `https://calendar.notion.so/meet/johnsordes/30min`. Jean a confirmé le passage à un échange gratuit de 30 minutes.

Le lien actuel ne collecte pas la description du blocage. Jean fournira plus tard un calendrier avec un champ obligatoire « Projet ou blocage ». En attendant, le site invite à préparer le contexte pour l’échange. Ce remplacement est le seul raccordement fonctionnel reporté.

Pour connecter le nouveau calendrier : vérifier ses 30 minutes et son champ obligatoire, remplacer les cinq destinations `data-booking-link`, adapter le nom du prestataire et le texte `booking-prompt`, puis vérifier le formulaire et sa confirmation. Ne pas ajouter de formulaire local qui ferait croire qu’une description est transmise.

Le calendrier doit correspondre à la durée annoncée et au parcours de collecte du contexte convenu avec Jean. Le site ne conserve aucune donnée de formulaire, ne charge aucun calendrier intégré et n’ajoute aucun outil de mesure. La réservation est traitée par le prestataire externe.

Le diagnostic comprend une analyse cadrée, une restitution et un plan priorisé. Les corrections sont séparées. Les prix, délais, engagements et expériences non confirmés ne doivent pas être ajoutés comme des promesses acquises.

## Mise en ligne

Le dépôt conserve son fonctionnement statique pour GitHub Pages. Aucune publication n’est déclenchée par la prévisualisation locale. Vérifier le parcours de réservation et les informations publiques avant une mise en ligne demandée par Jean.
