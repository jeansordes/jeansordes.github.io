# Recette de la page de services de Jean Sordes

Date : 7 octobre 2026. Page implémentée localement à partir du [PRD](prd-page-services.md), avec un échange gratuit passé à 30 minutes à la demande de Jean. Aucune mise en ligne effectuée.

## Résultat

Les sections de la page, les adaptations mobiles, la navigation, la FAQ et les cinq liens de réservation sont implémentés. Le site fonctionne sans JavaScript ni compilation. Le calendrier Notion fourni est connecté provisoirement.

Jean a choisi de fournir plus tard un nouveau calendrier comportant un champ obligatoire de description du projet ou du blocage. Ce raccordement reste reporté. La page actuelle invite à préparer sa description pour l’échange ; elle ne prétend pas que Notion la recueille.

## Vérifications réalisées

Les outils de prévisualisation T3 étaient indisponibles dans cet environnement. Les contrôles ont été réalisés avec Chromium sans interface graphique, Playwright et axe, sur un serveur HTTP local.

| Contrôle | Résultat |
| --- | --- |
| Largeurs 320, 390, 600, 760, 768, 1024, 1280 et 1440 px | Aucun défilement horizontal |
| Ressources et images | Aucun échec de chargement ; portrait local optimisé à environ 52 Ko |
| Structure | Un titre principal, sections nommées et ancres internes résolues |
| Navigation au clavier | Lien d’évitement fonctionnel ; FAQ ouverte et fermée avec Entrée ; focus visible |
| JavaScript désactivé | Contenus, liens et FAQ fonctionnels |
| Texte agrandi à 200 % et fenêtre réduite | Aucun débordement horizontal dans les scénarios contrôlés |
| Réduction des mouvements | Défilement animé désactivé lorsque la préférence est active |
| Audit axe sur 1440, 390 et 320 px | Aucune violation détectée dans les règles WCAG A et AA contrôlées |
| Vue initiale sur ordinateur | CTA principal visible à 1440 × 900, 1366 × 768 et 1280 × 720 |
| Réservation | Cinq destinations identiques vers le lien Notion fourni ; calendrier affichant 30 minutes |
| Formulaire Notion | Créneau sélectionnable ; champs nom, e-mail et mode de rendez-vous présents ; aucune description du blocage |
| Ressources publiques | Pas de script de mesure, de stockage de formulaire ni de chargement intégré du calendrier |
| Domaine | Fichier `CNAME` conservé à l’identique |
| Revue des modifications | Aucun problème d’espacement signalé par `git diff --check` |

L’inspection du formulaire externe s’est arrêtée avant l’envoi : aucun rendez-vous de test n’a été créé et aucune confirmation réelle n’a été envoyée. L’audit automatisé complète les contrôles manuels du rendu et du clavier ; il ne constitue pas une certification d’accessibilité.

## Correspondance avec les critères du PRD

| Critère | État |
| --- | --- |
| A1 à A4 | Implémentés : Jean au premier plan, rôle expliqué, diagnostic prioritaire, corrections séparées et accompagnement avec décision du dirigeant |
| A5 | Raccordement provisoire vérifié ; champ obligatoire et confirmation réelle du nouveau calendrier à vérifier après réception de son URL |
| A6 à A8 | Implémentés : distinction des prestations, périmètre à cadrer, aucun prix hypothétique ou résultat inventé publié |
| A9 à A12 | Implémentés et contrôlés dans les scénarios ci-dessus |

## Raccordement reporté

À réception du nouveau calendrier : vérifier la durée de 30 minutes et le champ obligatoire « Projet ou blocage », remplacer les cinq liens de réservation, adapter le nom du prestataire et l’invitation à décrire le blocage pendant la réservation. Vérifier ensuite les créneaux, les erreurs du formulaire et la confirmation du rendez-vous avec Jean.

Les choix de texte, palette et portrait restent les propositions de V1 prévues dans le PRD. Les détails commerciaux du diagnostic et de l’accompagnement restent à convenir par mission. Le site est prêt à être relu ; la collecte du blocage dans la réservation n’est pas validée pour une publication conforme à A5.
