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

## Lot parcours et portfolio — 8 octobre 2026

Lot implémenté localement à la demande de Jean, sans publication. Le parcours a été relu sur LinkedIn via SocialFetch. Quatre cartes d’expériences, le master MIAGE et trois plugins Obsidian sont présentés. Les [sources](sources-parcours-portfolio.md) précisent les faits retenus, les indicateurs datés, la provenance des deux captures et les limites des vérifications externes.

Le navigateur partagé T3 a été essayé avec `preview_status` puis `preview_open` ; les deux outils indiquent explicitement qu’aucun hôte de navigateur n’est disponible. Les contrôles ont donc été réalisés avec Playwright et Chromium sur le serveur local.

| Contrôle                                                                 | Résultat                                                                                                                                        |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Largeurs 320, 390, 600, 760, 768, 1024, 1280 et 1440 px, sans JavaScript | Aucun défilement horizontal, image cassée ou ancre interne manquante                                                                            |
| Galerie Dot Navigator                                                    | Ouverture et fermeture au clavier sans JavaScript ; capture chargée et visible ; agrandissement vers l’image locale fonctionnel                 |
| Navigation Projets, lien d’évitement et FAQ                              | Ancres et interactions au clavier fonctionnelles                                                                                                |
| Zoom et texte à 200 %                                                    | Aucun débordement horizontal dans les scénarios testés                                                                                          |
| Audit axe à 1440, 390 et 320 px                                          | Aucune violation WCAG A/AA détectée dans les règles contrôlées                                                                                  |
| Préférence de réduction des mouvements                                   | Défilement animé désactivé                                                                                                                      |
| Rendu visuel                                                             | Parcours sur ordinateur et portfolio sur ordinateur et mobile inspectés                                                                         |
| Médias                                                                   | Deux captures WebP locales, environ 84 Ko au total, dimensions explicites et chargement différé                                                 |
| Sources et liens                                                         | Dépôts GitHub, manifestes d’auteur et registre officiel Obsidian vérifiés ; pages de fiche Obsidian non inspectables automatiquement (HTTP 403) |
| Réservation                                                              | Les cinq destinations restent identiques vers le calendrier Notion de 30 minutes                                                                |
| Revue des modifications                                                  | `git diff --check` sans erreur ; `CNAME` inchangé                                                                                               |

Les illustrations d’Auto Expander et de Workflow Boards sont explicitement des exemples de principe, pas des captures. Les indicateurs sont un relevé manuel ; aucune API ni collecte supplémentaire n’est ajoutée au chargement de la page. Le raccordement du nouveau calendrier avec description obligatoire reste reporté comme précédemment.

## Identité et visuel avec portrait — 11 octobre 2026

Jean a demandé l’ajout de son portrait dans l’image de partage et une signature animée expliquant jzs.fr. La version `assets/jean-sordes-partage-v2.png` intègre son portrait réel avec imagegen ; les métadonnées pointent vers cette version, avec les dimensions 1 730 × 909 et un texte alternatif adapté. La première image est conservée. Le [prompt d’édition](prompt-visuel-partage-portrait.txt) est enregistré.

La page utilise « Jean Z. Sordes » pour la présentation fixe ; « Jean dans la lune » est retiré. Une barre de signature fixe de 60 px, avec portrait, prend le relais lorsque l’en-tête sort de l’écran. Elle suit la séquence Jean → Jean Z. Sordes → Jean Zacharie Sordes → JZS → Jean Zacharie Sordes → Jean Z. Sordes → Jean en fonction de la progression réelle du défilement. Elle se recalcule au redimensionnement et à l’ouverture de la FAQ ou de la galerie. Les ancres gardent une marge supérieure pour rester visibles sous la barre.

Contrôles réalisés avec Chromium et Playwright après indisponibilité explicite des outils T3 `preview_status` et `preview_open` :

- Sept étapes de la signature vérifiées dans les deux sens, à 320, 390, 768 et 1 440 px ; barre visible après l’en-tête et nom accessible stable.
- Réduction des mouvements : nom fixe « Jean Z. Sordes », sans animation. Sans JavaScript : en-tête statique et réservation fonctionnelle.
- Recette mobile/bureau à huit largeurs de 320 à 1 440 px : aucun débordement, ancre interne manquante ou image cassée.
- FAQ au clavier, lien d’évitement, zoom et texte à 200 %, préférence de réduction des mouvements vérifiés ; audit axe à trois largeurs sans violation détectée dans les règles WCAG A/AA contrôlées.
- Portrait et textes du visuel inspectés ; rendu de la signature longue sur mobile inspecté.

### Réservation

Jean a choisi de conserver les boutons/liens après constat du refus d’intégration en iframe. Le lien Notion répond avec une politique `frame-ancestors https://app.notion.com https://app.dev.notion.com`, qui n’autorise pas jzs.fr ; aucune iframe cassée n’est ajoutée. Les cinq destinations restent identiques.

Le formulaire externe a été revérifié après sélection d’un créneau, sans saisie de données ni réservation : nom, e-mail et mode de rendez-vous sont présents, mais aucun champ de description du blocage n’apparaît encore. Le texte de la page continue donc d’inviter à préparer le contexte, sans annoncer une collecte effective. La collecte dans l’interface de réservation reste à configurer ou à vérifier sur un nouveau lien.

### Remplacement par la photo récente

**Ajustement de la signature :** à la demande de Jean, le nom ne change plus par remplacement de texte. Ses fragments sont créés une seule fois, puis leur largeur varie continuellement avec le défilement : les lettres et les espaces se déploient ou se replient, notamment autour des initiales J, Z et S. La boucle initiale est conservée. Les étapes, les états intermédiaires, la conservation des éléments dans le DOM, les deux sens de défilement et l’absence de débordement sont vérifiés à 320, 390, 768 et 1 440 px. Les versions sans mouvement et sans JavaScript sont également vérifiées.

À la demande de Jean, la photo fournie dans la conversation remplace le portrait Gravatar dans les trois images de la page. La photo est encodée en JPEG (environ 173 Ko) sans retouche du visage ; le cadrage est défini par CSS. Le visuel de partage est édité avec imagegen pour reprendre cette seule référence d’identité, et livré dans `assets/jean-sordes-partage-v3.png`. Les deux métadonnées d’image pointent vers cette version ; les anciens fichiers restent conservés.

Vérifications à 320, 390 et 1 440 px : trois références au nouveau portrait, aucune à l’ancien portrait dans la page, chargement des images réussi, absence de débordement horizontal et métadonnées v3 correctes. Les cadrages de la section « À propos » sur mobile et ordinateur et le portrait du visuel de partage ont été inspectés. `git diff --check` ne signale aucune erreur. Aucune publication n’a été effectuée.
