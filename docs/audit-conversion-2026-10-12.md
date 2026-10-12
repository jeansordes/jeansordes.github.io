# Audit de conversion — 12 octobre 2026

## Périmètre et limites

Audit de la version locale de `index.html`, du brief et des décisions plus récentes consignées dans le PRD et le README. Inspection du rendu dans Chromium à 1440 × 900 et 390 × 844, lecture des contenus, des liens et du fonctionnement du carrousel. L’aperçu T3 étant explicitement indisponible, inspection avec Playwright dans l’environnement local.

Les constats sur la hiérarchie et les répétitions sont observables. Leur impact sur la conversion est une hypothèse : aucun relevé de trafic, de réservations ni test utilisateur ne permet de chiffrer une perte ou un gain. Le calendrier externe et une réservation complète n’ont pas été retestés dans cet audit. Aucun changement de la page publique n’est réalisé.

Les documents récents consignent deux offres et un échange de 30 minutes, qui remplacent ces éléments du brief initial. L’audit conserve cette organisation. Il ne valide aucun prix, délai, abonnement ou engagement supplémentaire.

## Diagnostic

La page dispose d’un univers identifiable, de deux offres visuellement distinctes et d’un accès persistant à la réservation. Mais les offres et une illustration générique prennent la place de Jean à l’arrivée. Ensuite, plusieurs blocs reformulent les mêmes intentions au lieu d’apporter une nouvelle information utile à la décision.

Le problème des titres tient autant à leur imprécision qu’à leur longueur. « Vibe Pompier » et « Vibe Doctor » sont courts, mais leurs noms seuls ne disent pas ce que le client achète. « De la technique. Et surtout, du bon sens. » occupe un titre sans annoncer un contenu précis. Raccourcir doit surtout permettre de mieux identifier chaque bloc.

## Priorité 1 — Faire de l’arrivée une carte de visite

**Constat.** Dans le contenu, « Je suis Jean Z. Sordes » arrive après les deux cartes commerciales. Le portrait du hero mesure 53 × 53 px sur ordinateur et 45 × 45 px sur mobile. Il est placé sous l’illustration, dans un ensemble masqué aux lecteurs d’écran par `aria-hidden="true"`. Le grand portrait personnel arrive dans « À propos ».

| Repère depuis le haut du document | Ordinateur | Mobile |
| --- | ---: | ---: |
| Présentation « Je suis Jean… » | 715 px | 653 px |
| Petit portrait du hero | 794 px | 1 371 px |
| Bouton de réservation du hero | 850 px | 835 px |
| Début de « À propos » | 4 828 px | 6 846 px |

**Recommandation.** Mettre un portrait substantiel, le nom et un rôle compréhensible avant les offres. Sur mobile, ce groupe doit précéder le titre et les cartes dans l’ordre du document. Sur ordinateur, le portrait peut occuper la colonne actuellement consacrée à l’illustration. Garder des stickers autour du portrait pour préserver la personnalité.

Proposition éditoriale, à tester :

> Jean Z. Sordes · Ingénieur logiciel & pédagogue  
> Face à l’IA, vous n’êtes plus seul.  
> Je répare les blocages de votre application et vous aide à choisir la suite.  
> **Réserver un échange**  
> Gratuit · 30 min · Sans engagement

La punchline peut rester ; elle doit être accompagnée immédiatement du contexte concret. Le titre professionnel exact reste une question de positionnement, pas une décision prise par cet audit.

**Critère de réussite.** Au premier écran mobile, on identifie le visage, le nom, l’aide proposée et le prochain geste. Le portrait d’identité n’est plus inclus dans un conteneur entièrement décoratif.

## Priorité 2 — Donner un rôle unique à chaque bloc

| Zone | Répétition ou flou constaté | Proposition |
| --- | --- | --- |
| Hero | Punchline répétée dans un sticker ; deux cartes avant la présentation de Jean | Identité, promesse concrète, réservation, puis deux entrées compactes |
| Vibe Pompier | Deux introductions, un avant/après et quatre étapes racontent l’intervention et la vérification | Une phrase de résultat, un exemple visuel et trois étapes courtes |
| Vibe Doctor | Illustration, sous-titre, paragraphe et liste reprennent comprendre/prioriser/suivre | Une phrase sur l’usage, un exemple de livrable et une explication du suivi |
| Approche / À propos | Comprendre, expliquer, autonomie, décision du client reviennent dans les deux offres et ces sections | Regrouper la présentation et deux ou trois principes distinctifs |
| TV | Date et timestamp utiles ; timestamp répété dans bouton, texte et lien | Une carte principale, une seconde accessible, un seul repère de lecture par carte |
| Portfolio | Introduction et titre répètent « outils concrets » ; beaucoup d’instructions et d’espace | Montrer immédiatement un outil ; détails et autres projets à la demande |
| Bloc final | Deux questions, plusieurs paragraphes logistiques, prestataire et réassurance | « Parlons de votre projet », une phrase de préparation et le bouton |

La répétition du bouton de réservation est utile : elle permet d’agir au moment où le visiteur est convaincu. La répétition de l’argumentaire l’est moins. Garder une mention essentielle près d’une offre et son développement dans une FAQ peut aussi faciliter la lecture.

## Priorité 3 — Montrer ce que le client obtient

Les éléments visuels des offres sont aujourd’hui des représentations statiques. Ajouter un clic n’aide que si celui-ci révèle un résultat, une différence ou une décision. Le bénéfice principal doit rester visible avant toute interaction.

### Vibe Pompier : une démonstration de correction

Proposer deux ou trois symptômes sélectionnables, par exemple « Chargement sans fin » et « Redirection en boucle ». Chaque sélection montre un petit parcours avant/après et le contrôle associé : « La connexion doit ouvrir le tableau de bord ».

Afficher explicitement « Exemple illustratif ». La démonstration doit expliquer comment une correction est vérifiée ; elle ne constitue ni un cas client réel, ni une promesse de prise en charge de toutes les technologies. Les critères réels restent convenus pour la mission.

Sous le visuel, trois étapes suffisent : **Cadrer → Corriger → Vérifier**. Le texte de cadrage conserve résultat attendu, prix et calendrier convenus avant engagement. Les informations détaillées peuvent être dépliables.

### Vibe Doctor : un aperçu de plan d’action

Remplacer la carte générique « Comprendre / Choisir / Suivre » par un exemple de plan : priorité, constat, action et critère de validation. Une action peut être ouverte pour découvrir son explication. Le client comprend alors ce qu’il pourra utiliser ou transmettre.

Montrer aussi comment le suivi reprend ce plan : ce qui a avancé, ce qui reste à décider et la prochaine action. Préciser que rythme et périmètre sont convenus, et que l’implémentation éventuelle est cadrée séparément.

Ne pas annoncer comme inclus un format précis ou une cadence qui ne seraient pas validés. L’aperçu doit rester clairement illustratif.

### Portfolio : faire essayer un outil

Le carrousel manuel fonctionne lors de l’inspection. En revanche, le schéma d’Auto Expander décrit seulement une transformation. Un champ de démonstration où le visiteur tape un raccourci et voit un texte apparaître montrerait mieux l’utilité du projet.

Cette démonstration vient après la compréhension des services. Son intérêt est de montrer la capacité à construire des outils utiles ; elle ne doit pas devenir une étape imposée pour réserver.

### Règles communes

Boutons explicites, clavier, états sélectionnés perceptibles, réduction des mouvements et contenu compréhensible sans JavaScript. Éviter les animations automatiques et les informations essentielles cachées derrière des clics. Aucun texte saisi dans une démo locale ne doit être transmis implicitement.

## Priorité 4 — Clarifier le choix et la réservation

Vibe Pompier analyse aussi le problème avant de corriger. Le mot « diagnostic » seul ne suffit donc pas à distinguer Vibe Doctor.

Proposer des sous-titres fonctionnels, immédiatement sous les noms :

- **Vibe Pompier : corriger un blocage précis.**
- **Vibe Doctor : définir les priorités et suivre la suite.**

Les noms et les couleurs restent des repères mémorisables ; le résultat client explique la différence.

Les cinq CTA de réservation mènent au même calendrier, avec des libellés différents. « Préparons un diagnostic » peut donner l’impression que le diagnostic lui-même est réservé. Préférer un libellé commun « Réserver un échange », avec « Gratuit · 30 min » visible à proximité. Le texte de chaque offre peut contextualiser l’échange.

Le README indique que le calendrier ne collecte pas encore le blocage et que son remplacement a été reporté par Jean. Ce point reste ouvert : le site doit continuer à inviter à préparer le contexte, sans prétendre le transmettre. Le raccordement final devra vérifier durée, champ de contexte et confirmation.

## Priorité 5 — Rapprocher les preuves des promesses

Le rendu local atteint environ 9 171 px sur ordinateur et 12 593 px sur mobile, avec FAQ et parcours repliés. La longueur seule ne permet pas de conclure à une mauvaise conversion. Mais les preuves arrivent après de longues explications : la TV commence à 5 698 px sur mobile et le récit Lovable après le parcours.

Rapprocher le récit Lovable de Vibe Pompier, où il illustre directement le service. Conserver son statut de récit personnel anonymisé, sans inventer de témoignage, d’image ou de résultat chiffré.

Sous le hero, quelques repères compacts peuvent renvoyer au parcours et à BX1. Les logos doivent garder les rôles associés : expériences professionnelles, pas avis clients sur ces nouvelles offres. La télévision crédibilise la pédagogie et la prise de parole sur l’IA ; elle ne démontre pas à elle seule la qualité d’une réparation.

## Titres proposés

| Actuel | Proposition |
| --- | --- |
| On se retrousse les manches, comment ? | L’intervention en 3 étapes |
| De la technique. Et surtout, du bon sens. | Comment je travaille |
| Construire, transmettre, entreprendre. | Mon parcours |
| Quand les demandes à l’IA ne suffisent plus. | Un projet Lovable repris |
| Des outils concrets. | Des outils à essayer — si une démo est ajoutée |
| Vous vous demandez peut-être… | Vos questions |
| Un blocage à lever ? Un cap à construire ? | Parlons de votre projet |

Éviter systématiquement le triplet surtitre + titre + sous-titre quand il reformule trois fois le même message. Les noms des offres peuvent conserver un sous-titre explicatif.

## Parcours proposé

1. **Jean, dès l’arrivée** : visage, nom, aide concrète, réservation ; deux entrées compactes vers les offres.
2. **Repères de confiance** : expériences et lien BX1, sans grand bloc intermédiaire.
3. **Vibe Pompier** : résultat attendu, exemple, déroulement court, récit Lovable et CTA.
4. **Vibe Doctor** : plan illustratif, usage du suivi, limites et CTA.
5. **Jean et sa méthode** : présentation courte, principes distinctifs, parcours détaillé repliable.
6. **Preuves à explorer** : outils et vidéos ; résumé visible, détails à la demande.
7. **Questions et réservation** : objections restantes, invitation simple.

Garder du texte pour expliquer pourquoi : intérêt de cadrer avant de coder, choix économiques, autonomie. Rendre le quoi et le comment visibles par des résultats, des étapes et des exemples. Déplier les détails secondaires, sans cacher le périmètre des prestations.

## Ordre de mise en œuvre et validation

Commencer par le hero et la hiérarchie mobile, puis supprimer les reformulations et clarifier les CTA. Ajouter ensuite un aperçu de livrable Vibe Doctor et une démonstration Vibe Pompier. Terminer par le regroupement des preuves et les démos du portfolio.

Avant publication, vérifier à 390 × 844 et sur petit ordinateur : identité et CTA visibles à l’arrivée, distinction des offres compréhensible, exemples explicitement illustratifs, navigation clavier et parcours sans JavaScript. Vérifier séparément le raccordement du calendrier quand sa nouvelle URL sera fournie.

Un test court auprès de prospects peut poser quatre questions après quelques secondes de lecture : qui intervient, pour quel problème, quelle différence entre les offres, que se passe-t-il après le clic ? Pour mesurer la conversion réelle, distinguer clic vers le calendrier et réservation terminée ; un clic ne constitue pas un rendez-vous. Aucun outil de suivi n’est ajouté par cet audit.
