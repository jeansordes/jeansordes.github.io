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

**Ajustement initial de la signature :** à la demande de Jean, le nom ne change plus par remplacement de texte. Ses fragments sont créés une seule fois, puis leur largeur varie avec le défilement. Cette première version a ensuite été affinée comme décrit ci-dessous.

À la demande de Jean, la photo fournie dans la conversation remplace le portrait Gravatar dans les trois images de la page. La photo est encodée en JPEG (environ 173 Ko) sans retouche du visage ; le cadrage est défini par CSS. Le visuel de partage est édité avec imagegen pour reprendre cette seule référence d’identité, et livré dans `assets/jean-sordes-partage-v3.png`. Les deux métadonnées d’image pointent vers cette version ; les anciens fichiers restent conservés.

Vérifications à 320, 390 et 1 440 px : trois références au nouveau portrait, aucune à l’ancien portrait dans la page, chargement des images réussi, absence de débordement horizontal et métadonnées v3 correctes. Les cadrages de la section « À propos » sur mobile et ordinateur et le portrait du visuel de partage ont été inspectés. `git diff --check` ne signale aucune erreur. Aucune publication n’a été effectuée.

### Easter egg discret avec pauses

Le monogramme « js ✳ » est retiré de l’en-tête et du pied de page. La barre fixe est supprimée ; l’effet est limité au sticker du portrait, sans overlay ni déplacement du contenu. La boucle commence et finit par JZS.fr, passe par Jean Zacharie Sordes, Jean Z. Sordes et Jean, puis revient dans l’autre sens.

La boucle complète utilise au maximum 620 px de défilement autour du portrait, avec une distance adaptée à la hauteur de l’écran. Chaque phase comporte 65 % de pause et 35 % de transition. Les fragments dont la largeur est partielle sont invisibles, évitant les lettres coupées ou superposées ; le sticker réserve la largeur du nom complet. Les largeurs sont mesurées avant transformation, pour ne pas être faussées par la rotation du sticker.

Contrôles : sept formes lisibles et leurs pauses vérifiées dans les deux sens à 320, 390, 768 et 1 440 px ; fragments partiels masqués ; mêmes éléments DOM conservés ; largeur stable ; absence de barre fixe ou de monogramme. Réduction des mouvements et JavaScript désactivé : JZS.fr fixe. La recette générale à huit largeurs, le clavier, le zoom et les audits axe à trois largeurs passent sans anomalie détectée. Les cinq destinations de réservation restent identiques. Rendu du sticker sur mobile inspecté ; `git diff --check` sans erreur.

### Boucle entièrement visible et icônes Lucide

La durée du défilement de la signature est recalée sur le trajet pendant lequel le sticker entier reste à l’intérieur du viewport, avec une petite marge. Les limites fixes de distance sont supprimées ; `visualViewport` tient compte de l’espace visible sur mobile. Les changements de hauteur ou de position du viewport relancent le calcul. Une pause finale sur JZS.fr est ajoutée avant la sortie de l’écran.

La boucle et les pauses ont été vérifiées sur des fenêtres de 1 440 × 900, 768 × 700, 390 × 844, 320 × 568 et 900 × 360 px, dans les deux sens. La dernière forme reste entièrement à l’écran pendant sa pause finale. Les fragments partiels restent masqués ; la largeur est stable et les modes sans mouvement ou sans JavaScript conservent JZS.fr.

Les icônes des liens, boutons, cartes, principes et contrôles de FAQ proviennent de [Lucide](icones-lucide.md), sous forme de sprite SVG local avec licence conservée. Vérification sans JavaScript : tracés visibles, identifiants de symboles valides, icônes décoratives exclues de l’arbre d’accessibilité et plus/minus de FAQ fonctionnels au clavier. Rendu des cartes sur mobile inspecté. La recette générale à huit largeurs et les audits axe à trois largeurs passent. Aucun calendrier ni outil de mesure supplémentaire n’est chargé.

## Lot 16 — Deux offres et intervention urgente — 11 octobre 2026

Implémenté localement à la demande de Jean, avec un sous-agent pour l'implémentation et une revue finale dans le navigateur. Les décisions plus récentes de la section 16 du PRD remplacent le cadrage V1 du diagnostic. Aucune publication n'a été effectuée.

La présentation initiale propose « Intervention urgente » et « Accompagnement » avant les détails. L'intervention inclut les corrections du blocage convenu, avec « Vous n'êtes plus seul », la participation du client et le CTA « Préparons une intervention ». Les stickers 🔥 sont décoratifs. La navigation persistante montre la section consultée, y compris hors des offres ; les deux offres restent accessibles sur mobile. Parcours et détails des réalisations sont dépliables avec les éléments natifs `details`, en conservant les sources et les indicateurs datés. La FAQ et les métadonnées correspondent à ces nouvelles offres.

Les outils T3 `preview_status` puis `preview_open` ont indiqué explicitement l'absence d'hôte de navigateur. Les vérifications ont donc été réalisées avec Playwright, Chromium et axe sur le serveur HTTP local.

| Contrôle | Résultat |
| --- | --- |
| Largeurs 320, 390, 600, 760, 768, 1024, 1280 et 1440 px | Aucun débordement horizontal, ancre manquante ou erreur JavaScript ; un seul titre principal |
| Ressources et images | Aucun échec HTTP ou image cassée après chargement explicite des images différées ; sprite Lucide et portrait préservés |
| Repère actif | 32 vérifications à 320, 390, 768 et 1440 px : présentation, offres, approche, parcours, projets, questions et premier échange correctement identifiés |
| Navigation persistante | Liens des deux offres visibles, cibles d'au moins 44 px de hauteur, titres sous la barre et aucune offre active à tort dans une autre partie |
| Ancres natives | Clic mobile et ouverture directe sur `#intervention` contrôlés ; hauteur de défilement ajustée à la barre |
| Détails dépliés | Parcours, projets, galerie et FAQ ouverts : aucun débordement aux quatre largeurs de contrôle ; suivi de section correct après changement de hauteur |
| Sans JavaScript | Deux offres accessibles, liens et FAQ fonctionnels ; ouverture et fermeture d'un bloc de détails au clavier à 320 px |
| Clavier | Lien d'évitement visible au focus et transfert vers le contenu ; contrôles natifs dépliables utilisables avec Entrée |
| Texte à 200 % | Aucun débordement à 640 et 1280 px, avec taille racine doublée et corps de texte agrandi |
| Audit axe | Aucune violation détectée dans les règles WCAG A/AA contrôlées à 1440, 390 et 320 px |
| Réduction des mouvements | Défilement animé désactivé et sticker d'identité fixe sur JZS.fr |
| Easter egg du portrait | Sept formes et pauses vérifiées dans les deux sens à 1440 × 900, 768 × 700, 390 × 844, 320 × 568 et 900 × 360 ; largeur stable, fragments partiels masqués et dernière pause entièrement visible sous la barre |
| Cohérence commerciale | Aucune référence médicale dans le contenu public ; corrections incluses dans l'intervention, rôle de conseil conservé dans l'accompagnement, aucun délai ni remboursement non défini publié |
| Réservation | Cinq CTA avec une destination identique vers le calendrier Notion existant de 30 minutes ; aucune nouvelle réservation créée |
| Revue visuelle | Présentation, intervention et accompagnement inspectés sur mobile et bureau ; visuel de partage v3 inspecté, sans référence médicale |
| Revue technique | Syntaxe des deux scripts contrôlée ; `git diff --check` sans erreur ; `CNAME`, portrait, visuel de partage et sprite Lucide inchangés |

La nouvelle barre persistante nécessitait un ajustement de l'Easter egg : la fin de boucle tient désormais compte du bas de la navigation, pour que la dernière forme reste lisible avant de passer derrière elle.

**Correspondance avec le PRD :** L16-1 à L16-6, L16-9 et L16-10 sont implémentés et contrôlés. L16-7 est raccordé au calendrier existant ; la description obligatoire attend toujours le nouveau lien de Jean. Pour L16-8, les modalités du délai de sept jours et de la garantie restent ouvertes : ces engagements ne sont pas affichés. Cette recette ne valide ni ces modalités ni une confirmation de réservation sur le futur calendrier.

## Lot 17 — Pompier, Vibe Doctor et carrousel — 11 octobre 2026

Évolution implémentée localement à la suite de la nouvelle orientation de Jean. La deuxième offre est désormais **Vibe Doctor — diagnostic et suivi**, pour comprendre les besoins, choisir les priorités et suivre les améliorations avec conseil et coaching. Le rôle commercial de « CTO à temps partagé » laisse place à cette entrée, tout en conservant l'identité, l'expertise technique et la posture de conseil de Jean. L'intervention urgente conserve les corrections et le fonctionnement collaboratif. Le visuel de partage v3 reste inchangé : il décrit le rôle professionnel de Jean sans afficher de troisième offre.

Le portfolio utilise un carrousel manuel à un projet visible, avec boutons précédent/suivant, choix par nom, compteur annoncé et défilement horizontal natif. Les flèches, Début et Fin changent de projet lorsque la galerie a le focus ; elles n'interceptent pas les actions dans les liens ou les détails. La hauteur s'adapte au projet et à ses détails ouverts. Les projets hors écran sont exclus du focus avec JavaScript ; sans JavaScript, les ancres et le défilement natif permettent d'accéder aux trois projets. Aucun défilement automatique ni bibliothèque supplémentaire n'est ajouté.

Les outils T3 `preview_status` et `preview_open` ont de nouveau confirmé l'absence d'hôte de navigateur. Les contrôles ont utilisé Playwright, Chromium et axe sur le serveur HTTP local.

| Contrôle | Résultat |
| --- | --- |
| Page à 320, 390, 600, 760, 768, 1024, 1280 et 1440 px | Aucun débordement horizontal de la page, ancre manquante, image cassée après chargement ou erreur JavaScript |
| Audit axe à 1440, 390 et 320 px | Aucune violation détectée dans les règles WCAG A/AA contrôlées |
| Repère de section | 32 contrôles aux quatre largeurs 320, 390, 768 et 1440 px ; Vibe Doctor et les sections hors offres correctement indiqués |
| Ancres des offres | Titres visibles sous la navigation ; clic natif mobile et ouverture directe contrôlés |
| Navigation du carrousel à 320, 390, 768 et 1440 px | Trois projets accessibles par boutons, noms et défilement natif ; compteur, état actif et boutons aux limites cohérents |
| Clavier | Sélection par Entrée ; flèches, Début et Fin dans la galerie ; focus conservé après sélection et changement de projet |
| Détails et captures | Contribution et galerie de Dot Navigator dépliées, images chargées et contenu non tronqué ; hauteur ajustée lorsque l'on passe ensuite à un autre projet |
| Redimensionnement | Projet sélectionné conservé et réaligné après changement de largeur |
| Sans JavaScript | Commandes nécessitant le script masquées ; les trois liens de sélection ouvrent les projets par leurs ancres natives ; tous les contenus restent accessibles |
| Texte agrandi | À 200 %, les trois projets sont consultables à 640 et 1280 px, sans débordement de la page ni contenu tronqué dans la galerie |
| Réduction des mouvements et identité | Défilement manuel sans animation imposée ; boucle du portrait et ses pauses vérifiées dans les deux sens sur cinq formats, sous la navigation persistante |
| Réservation | Cinq destinations identiques vers le calendrier Notion de 30 minutes ; aucune réservation créée |
| Liens directs des projets | Ouverture sur `#project-expander` et `#project-boards` : bon projet visible, compteur et état accessible correspondants |
| Rendu et cohérence | Vues mobile/bureau du docteur et des projets inspectées ; noms et métadonnées actualisés ; sources, liens, indicateurs et identité de Jean conservés |
| Revue technique | Scripts syntaxiquement valides, fichiers de code formatés et `git diff --check` sans erreur ; `CNAME`, portrait, visuel de partage et sprite Lucide inchangés |

**Correspondance avec le PRD :** L17-1 à L17-9 implémentés et contrôlés. Les paramètres de prix, cadence, disponibilité, délai et garantie ne deviennent pas des engagements par ce changement de présentation. Le calendrier avec description obligatoire reste attendu comme indiqué dans la recette des lots précédents. Aucune publication n'a été effectuée.

## Lot 18 — Punchline, choix rouge/bleu, TV et logos — 12 octobre 2026

Les demandes de Jean des 11–12 octobre sont implémentées localement. La punchline est « Face à l’IA, vous n’êtes plus seul ». Les deux choix, placés avant l'introduction détaillée, sont **Vibe Urgence** en rouge avec feu/pompier et **Vibe Doctor** en bleu avec médecin/stéthoscope. Ces repères figurent aussi dans la navigation persistante. Les noms et métadonnées sont cohérents ; les CTA et les modalités restent ceux des offres déjà définies.

Deux cartes permettent de charger les vidéos BX1 aux timestamps fournis, avec les titres **Bonsoir Bruxelles** vérifiés par l'API oEmbed : 5 juin 2026 à 40:30 et 17 avril 2026 à 38:00. Le lecteur externe n'est créé qu'au clic ; les vignettes sont locales et les liens YouTube restent accessibles. Trois logos illustrent le parcours : MolenGeek, Holberton et Capgemini, avec leurs rôles et les sources documentés.

Les outils T3 `preview_status` puis `preview_open` ont confirmé l'absence d'hôte de navigateur. Les contrôles utilisent Playwright, Chromium et axe sur le serveur HTTP local.

| Contrôle | Résultat |
| --- | --- |
| Largeurs 320, 390, 600, 760, 768, 1024, 1280 et 1440 px | Aucun débordement horizontal de la page, ancre manquante, erreur JavaScript ou image cassée après chargement explicite |
| Audit axe à 1440, 390 et 320 px | Aucune violation détectée dans les règles WCAG A/AA contrôlées, y compris les nouvelles couleurs et commandes de lecture |
| Navigation | 36 contrôles aux quatre largeurs 320, 390, 768 et 1440 px ; repères corrects dans les offres, la TV et les sections hors offres ; titres sous la barre |
| Présentation initiale | Les deux choix sont visibles tôt sur mobile ; titres, noms et sous-titres expliquent les offres avec les couleurs et emojis demandés |
| Chargement des vidéos | Aucun lecteur ni appel externe avant activation ; chaque bouton crée un cadre sur `youtube-nocookie.com` avec le bon identifiant et `start=2430` ou `start=2280` |
| Interface vidéo au clavier | Activation par Entrée, titre explicite du cadre, focus transféré et dimensions réservées ; paramètres contrôlés avec une réponse distante simulée, sans confondre ce test avec une lecture réelle |
| Mode sans JavaScript | Boutons nécessitant JavaScript masqués ; deux liens YouTube avec les timestamps fournis consultables |
| Lecture YouTube réelle | Cadre distant ouvert pour le premier passage ; YouTube affiche une demande de connexion liée à son contrôle anti-bot. Lecture et contenu non validés dans cet environnement ; liens directs conservés |
| Logos | Copies locales, proportions conservées, rôles affichés et attribution MolenGeek consultable dans les détails du parcours |
| Texte agrandi | Contrôle à 200 % sans débordement à 1280 px ; ancres avec et sans JavaScript vérifiées par le sous-agent |
| Identité et réduction des mouvements | Boucle complète et pauses vérifiées dans les deux sens sur cinq formats, sous la nouvelle navigation ; JZS.fr fixe avec réduction des mouvements ou sans JavaScript |
| Portfolio | Carrousel manuel conservé ; suivi des sections vérifié avec tous les détails dépliés |
| Rendu | Introduction, offres, cartes TV et logos inspectés sur mobile et bureau |
| Réservation et domaine | Cinq destinations identiques vers le calendrier de 30 minutes ; `CNAME` et prestataire inchangés ; aucune réservation créée |
| Revue technique | Syntaxe des scripts vérifiée, code formaté et `git diff --check` sans erreur |

**Correspondance avec le PRD :** L18-1 à L18-7 sont implémentés et contrôlés dans les limites ci-dessus. Les titres et dates des émissions ont été vérifiés, mais la description du rôle d'invité IA et les timestamps reposent sur les indications de Jean. La lecture réelle doit être contrôlée dans un navigateur habituel avant de la considérer comme vérifiée. Les points déjà ouverts concernant le calendrier avec description obligatoire, les prix, le délai et la garantie restent ouverts. Aucune publication n'a été effectuée.

### Nom final — 12 octobre 2026

À la demande de Jean, le titre devient **Vibe Pompier**, avec le sous-titre **« Réparation urgente »**, pour former un duo avec Vibe Doctor. Navigation, repère actif, carte, titre de section, FAQ, métadonnées, README et PRD sont actualisés ; les anciennes mentions dans la recette restent historiques. Les contrôles de page à huit largeurs, les 36 vérifications de navigation et les audits axe à trois largeurs passent à nouveau. La revue de formatage et `git diff --check` ne signalent aucune erreur. Jean a explicitement demandé le commit et le push de l'ensemble des changements.


## Ajustements hero, parcours et speaker — 12 octobre 2026

Contrôles dans Chromium headless aux largeurs 1 440, 768, 390 et 320 px : aucun débordement horizontal, portrait visible dans la hero, raccourcis des offres masqués au début, visibles après la hero puis masqués au retour, absence de clignotement à la frontière, logos pointant vers LinkedIn. Les captures fournies sont intégrées en stickers dans un bloc compact.

Les deux stickers ouvrent une boîte de dialogue avec l’identifiant YouTube et le timestamp attendus. Échap et le bouton de fermeture retirent l’iframe et rendent le focus au sticker. Aucun lecteur n’est présent au chargement. Sans JavaScript, les deux liens YouTube restent accessibles. Aucun message d’erreur JavaScript observé. La réponse du lecteur externe est simulée pour ces tests ; la lecture réelle distante reste à contrôler dans un navigateur habituel. L’aperçu collaboratif T3 est indisponible dans cet environnement, vérifications effectuées avec Playwright.


## Retours navigateur — 22 octobre 2026

- Portrait du header recadré avec `object-fit: cover`, dimensions carrées fixes et proportions intrinsèques conservées. Les URL de la feuille de styles et du script de navigation sont versionnées pour renouveler le cache après déploiement.
- Raccourcis Vibe Pompier et Vibe Doctor visibles dès l’accueil, avec et sans JavaScript. Sur les écrans les plus étroits, les libellés passent sur deux lignes dans trois boutons toujours alignés.
- Grande illustration évoquant un formulaire retirée de Vibe Doctor.
- Conférences mises en avant par une carte d’accueil et une section violette juste après Vibe Doctor. Les liens BX1 et LinkedIn sont conservés.
- Section « À propos » délimitée par un fond, une bordure et un titre avant le portrait.
- Bloc d’expérience reformulé autour de « Vous aussi ? », avec un lien vers le premier échange. Le récit anonymisé reste disponible dans un volet dépliable.

Vérifications Chromium à 320, 390, 599, 600, 646, 760, 768, 1000, 1024 et 1440 px : portrait chargé et recadré, boutons visibles sans débordement, ancres et état actif fonctionnels, ordre des sections correct. Contrôles supplémentaires sans JavaScript à 320, 646 et 1440 px, notamment sur les ancres sous le header. Audits axe WCAG A/AA sans violation détectée aux trois mêmes largeurs. Lecteur vidéo : identifiants, timestamps, fermeture et retour du focus vérifiés avec une réponse distante simulée. Captures des sections modifiées inspectées. Syntaxe JavaScript et `git diff --check` valides.


## Conférences et formations — 22 octobre 2026

Le header ajoute un troisième raccourci permanent « Conférences et formations », de même niveau que Vibe Pompier et Vibe Doctor. Les trois liens restent alignés ; sur mobile et tablette, le nom et la réservation occupent la ligne précédente. La carte d’accueil et la section emploient le même intitulé. L’expérience de conception pédagogique et d’accompagnement au bac+2 chez MolenGeek est présentée avec les sources documentées dans `sources-parcours-portfolio.md`.

Contrôles Chromium à 320, 360, 390, 599, 600, 646, 768, 1000, 1100, 1101, 1280 et 1440 px : trois raccourcis visibles et alignés, cibles d’au moins 44 px, header inférieur à 140 px, aucun débordement ou chevauchement, ancre et état actif corrects. Navigation sans JavaScript vérifiée à 320, 646 et 1440 px. Aucun problème détecté par axe dans les règles WCAG A/AA contrôlées à ces trois largeurs. Captures du header et de la section formation inspectées ; aucune erreur JavaScript. Version de la feuille de styles renouvelée pour le cache.
