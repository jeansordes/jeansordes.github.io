# PRD de la page de services de Jean Sordes

Date initiale : 7 octobre 2026. Mise à jour : 12 octobre 2026. Version : 4. Statut : V1 et lots 16 à 18 implémentés localement ; raccordement du calendrier, modalités commerciales et lecture YouTube réelle à vérifier.

Ce PRD décrit la page de services de Jean Sordes et son évolution vers deux formats lisibles : « Vibe Pompier — réparation urgente » et « Vibe Doctor — diagnostic et suivi », avec un échange gratuit de 30 minutes pour commencer. Il s'appuie sur le [brief de référence](brief-page-services.md), complété par les décisions plus récentes consignées ici. Le brief conserve notamment les sources et les limites des expériences racontées.

Les sections de la V1 consacrées à Vibe Doctor conservent le cadrage historique. **Le lot de la section 16 fait référence sur les sujets qu'il remplace** : nom de l'offre, intervention comprenant les corrections, argumentaire, organisation des deux offres et navigation. Il consigne les décisions plus récentes de Jean, qui complètent et remplacent sur ces points le brief initial. Les autres exigences et les modifications déjà demandées restent applicables.

**La section 17 décrit l'évolution des offres** : Vibe Doctor devient la seconde offre de diagnostic et de suivi dans la durée, à côté de l'intervention urgente. Elle remplace la suppression du docteur et la présentation commerciale « CTO à temps partagé » du lot 16, et transforme le portfolio en carrousel manuel. Les sections antérieures restent conservées comme historique ; l'intervention collaborative, l'identité de Jean, la réservation et les autres exigences demeurent applicables.

**La section 18 actualise la présentation** : punchline « Face à l’IA, vous n’êtes plus seul », nom « Vibe Pompier », grandes entrées rouge/bleue avec emojis, passages TV et logos du parcours. Elle remplace les anciens libellés et traitements visuels sur ces points. Les modalités des deux offres restent celles des lots 16 et 17.

## 1. Statut des exigences

Trois statuts distinguent les décisions de Jean des choix nécessaires pour construire la page :

- **Retenu dans le brief** : direction à préserver pendant l'implémentation.
- **Proposition V1** : choix produit, éditorial ou technique proposé par ce PRD ; utilisable pour construire une première version, sans le présenter comme une décision déjà prise par Jean.
- **À confirmer** : information ou engagement qui doit être résolu avant son utilisation publique. Une section facultative peut être omise en attendant.

Les textes proposés dans ce document sont des bases de rédaction. Les modalités commerciales non confirmées ne doivent pas devenir des promesses par défaut.

## Décisions prises pendant l’implémentation

Le 7 octobre 2026, Jean a fourni le lien `https://calendar.notion.so/meet/johnsordes/30min` et choisi explicitement de passer l’échange gratuit à **30 minutes**. Cette décision remplace les 20 minutes du brief pour cette version. Le calendrier Notion est connecté provisoirement et sa destination est commune à tous les CTA.

L’inspection du calendrier confirme la durée de 30 minutes. Son formulaire présente le nom, l’e-mail et le mode de rendez-vous, sans champ de description du blocage. Jean a choisi de fournir un nouveau calendrier avec un champ obligatoire pour décrire le projet ou le blocage. Jean a indiqué qu’il fournirait cette URL plus tard. Ce raccordement est donc reporté à sa demande ; le lien Notion actuel n’est pas le parcours final validé pour A5. Dans l’aperçu, les textes invitent à préparer le contexte pour l’échange, sans prétendre que Notion le collecte.

## 2. Problème et objectifs

**Ajustements demandés le 11 octobre 2026, affinés ensuite par Jean :** la présentation fixe utilise « Jean Z. Sordes » pour expliquer le domaine jzs.fr ; « Jean dans la lune » et le monogramme « js ✳ » sont retirés. Le visuel de partage intègre son portrait réel. L’animation devient un Easter egg local au sticker du portrait dans « À propos », sans barre fixe qui concurrence la lecture et les CTA. Sa séquence est JZS.fr → Jean Zacharie Sordes → Jean Z. Sordes → Jean → Jean Z. Sordes → Jean Zacharie Sordes → JZS.fr. Les déploiements sont courts, séparés par des pauses ; les fragments partiellement visibles sont masqués jusqu’à leur ouverture complète. La largeur réservée reste stable. Sans JavaScript ou avec réduction des mouvements, le sticker reste sur JZS.fr, et l’identité de Jean reste explicitement visible dans la page.

Jean a envisagé une réservation en iframe, puis choisi de conserver le bouton/lien après constat que Notion limite les domaines autorisés à intégrer son calendrier. Ce choix remplace la demande d’iframe. La description du blocage doit toujours être collectée dans l’interface de réservation ; sa présence reste à vérifier dans le formulaire effectivement proposé.

La page actuelle présente Jean et ses liens sociaux, mais ne permet pas de comprendre ses prestations ni de commencer une relation commerciale.

La nouvelle page doit permettre à un visiteur de :

1. Identifier Jean et comprendre son rôle de conseil technique auprès du dirigeant.
2. Se reconnaître dans des blocages concrets, notamment sur une application créée avec l'IA.
3. Comprendre ce qu'il obtient avec un diagnostic et comment utiliser ses conclusions.
4. Distinguer l'échange gratuit, le diagnostic payant et les corrections éventuelles.
5. Réserver un premier échange en décrivant sa situation avec ses propres mots.

**Retenu dans le brief :** la valeur mise en avant repose sur les décisions éclairées, les blocages compris, les priorités, le temps gagné et l'autonomie. Le temps de travail de Jean sert au cadrage interne de l'offre, pas à sa justification principale auprès du visiteur.

## 3. Publics et besoins

| Public envisagé | Situation | Besoin auquel la page répond |
| --- | --- | --- |
| Créateur ou équipe utilisant l'IA | Une application fonctionne mal ou devient difficile à faire évoluer | Comprendre les causes et disposer d'un plan pour avancer |
| Fondateur non technique | Des choix techniques bloquent le projet | Obtenir des explications accessibles et décider quoi faire ou déléguer |
| Dirigeant avec une équipe | Besoin de recul et d'orientation technique | Être accompagné dans les arbitrages et les méthodes de l'équipe |
| Fondateur technique reprenant le développement | Besoin de structurer un projet et ses méthodes | Faciliter la poursuite du travail et le passage de relais |

Ces publics sont des hypothèses de ciblage issues du brief, sans validation commerciale. La situation de blocage est plus importante que l'étiquette du visiteur.

## 4. Périmètre de la première version

**Proposition V1 :** une page unique en français, adaptée au mobile, hébergée dans le dépôt existant. Vibe Doctor est l'offre la plus développée ; l'accompagnement régulier reste visible comme deuxième voie.

La V1 comprend la présentation de Jean, les symptômes traités, le diagnostic, l'accompagnement, l'approche, une présentation personnelle, une FAQ et les appels à réserver. Une expérience anonymisée peut compléter la présentation selon les règles de la section 8.

La formation reste secondaire : la V1 peut évoquer la pédagogie de Jean, sans catalogue ni produit de formation annoncé comme disponible.

Sont hors périmètre : paiement en ligne, espace client, collecte d'accès techniques, diagnostic automatisé, chatbot, abonnement achetable, boutique de ressources, blog et système de gestion de contenu. Les corrections des projets clients ne font pas partie du diagnostic vendu sur cette page.

## 5. Positionnement et messages

**Retenu dans le brief :** Jean Sordes est l'identité principale. Son positionnement souhaité est CTO à temps partagé, avec une posture de consultant. Il comprend, conseille et accompagne ; le dirigeant garde la décision finale. L'intégration de l'IA aux méthodes de l'équipe est un sujet de l'accompagnement, pas le remplacement de cette direction générale.

**Propositions V1 à confirmer pour publication :**

- Titre de rôle : « CTO à temps partagé — conseil et accompagnement technique ».
- Message principal : « Comprendre ce qui bloque. Savoir comment avancer. »
- Introduction : « Je suis Jean Sordes. Je vous aide à débloquer votre projet et à prendre des décisions techniques adaptées à votre entreprise. Vous gardez la main sur les décisions. »
- Libellé des CTA principaux : « Réserver un échange gratuit de 30 min ».
- Texte de soutien : « Décrivez votre projet ou votre blocage lors de la réservation. Ce premier échange permet de voir comment je peux vous aider. »

**Proposition V1 :** vouvoiement homogène, ton direct et chaleureux. Expliquer le rôle de CTO en langage courant ; ne pas supposer que le visiteur connaît cet acronyme. Parler de symptômes, de choix et de prochaines étapes avant de parler d'outils.

Éviter les promesses de réparation universelle, de revenu garanti, d'absence de bugs ou de sécurité absolue. Ne pas annoncer de délais, de disponibilité permanente, de remboursement ou de bonus non confirmés.

## 6. Architecture de la page

L'ordre suivant est une **proposition V1**, dérivée de la structure candidate du brief.

| Section | Contenu requis | Action ou effet attendu |
| --- | --- | --- |
| En-tête | Nom de Jean, navigation courte vers Diagnostic, Accompagnement et Approche | Se repérer ; rejoindre le CTA principal |
| Présentation initiale | Identité, rôle expliqué, message principal, introduction et CTA | Comprendre qui accompagne le projet et comment commencer |
| Situations de blocage | Quatre à six symptômes concrets | Reconnaître sa situation sans vocabulaire technique |
| Vibe Doctor | Public, valeur, contenu du diagnostic, déroulement et limites | Comprendre ce que l'on obtient et ce qui vient ensuite |
| Accompagnement régulier | Conseil, coaching, suivi et méthodes de l'équipe, dont l'IA | Voir une solution pour les besoins récurrents |
| Approche | Compréhension, arbitrages adaptés, explications et autonomie | Comprendre la manière de travailler avec Jean |
| À propos et expérience | Présentation personnelle ; récit facultatif et contextualisé | Donner du contexte concret sans inventer de preuves |
| FAQ | Réponses aux objections et limites de l'offre | Lever les ambiguïtés avant de réserver |
| Invitation finale | Rappel de l'échange gratuit, durée et CTA | Commencer le parcours de réservation |
| Pied de page | Liens professionnels et informations utiles au lancement | Retrouver Jean et les informations de contact |

Tous les CTA principaux ont la même destination. Un lien secondaire « Découvrir le diagnostic » peut mener à la section Vibe Doctor. Ne pas multiplier les destinations concurrentes dans la présentation initiale.

### Situations de blocage

Présenter des exemples tels que : « Une page charge sans fin », « Une correction casse une autre fonctionnalité », « Vous tournez en rond avec votre outil IA », « Les accès aux pages privées vous inquiètent », « Le projet devient difficile à reprendre ».

Ces exemples illustrent des besoins possibles. Ils ne constituent pas une garantie de prise en charge ; l'adéquation du projet doit être vérifiée.

### Présentation de Vibe Doctor

**Retenu dans le brief :** le diagnostic comprend une analyse dans un périmètre convenu, une restitution et un plan d'action priorisé et exploitable. Les modifications sont une prestation séparée.

**Proposition V1 de formulation :** « Votre application créée avec l'IA bloque ? Vibe Doctor vous aide à comprendre ce qui se passe et à choisir les prochaines étapes. »

Présenter le déroulement en quatre étapes :

1. **Premier échange gratuit** : comprendre le besoin et vérifier si Jean peut aider. Ce n'est pas le diagnostic approfondi.
2. **Cadrage de la mission** : convenir du périmètre, des accès nécessaires, des livrables, du délai et du prix avant engagement.
3. **Diagnostic** : analyser les points convenus, restituer les constats et remettre un plan d'action priorisé.
4. **Suite au choix du client** : utiliser le plan avec son outil IA, le transmettre à un développeur ou demander un devis distinct à Jean pour les corrections.

Mettre en évidence la valeur du plan : comprendre les blocages, choisir quoi traiter en premier, identifier ce qui peut être simplifié et faciliter la délégation. Ne pas confondre livraison d'un plan et correction effective de l'application.

Le document écrit, la restitution en visio et les critères de vérification des corrections sont des modalités proposées à formaliser. La page peut annoncer les trois composantes retenues sans fixer de nombre de pages, de parcours, de réunions ou de jours.

**Proposition V1 :** ne pas afficher de tarif. Expliquer que le périmètre et le prix sont convenus après vérification du besoin. Les 500 € restent une hypothèse interne à tester auprès des prospects et des premières missions. Ne pas utiliser d'ancrage artificiel avec un salaire de CTO à temps plein.

### Accompagnement régulier

Présenter le conseil, le coaching et le suivi technique pour relier les choix aux besoins des utilisateurs, à la stratégie et aux moyens de l'entreprise. Mentionner explicitement l'intégration de l'IA aux méthodes de l'équipe.

**Proposition de texte :** « Besoin d'un regard technique dans la durée ? Je vous accompagne dans vos choix, aide votre équipe à progresser et à intégrer l'IA à ses méthodes. Vous gardez la décision finale. Nous définissons ensemble le rythme et le périmètre. »

Ne pas afficher de forfait ou de cadence non définis. Les interventions opérationnelles éventuelles sont cadrées séparément ; elles ne sont pas implicitement incluses dans un abonnement.

### Approche et FAQ

Illustrer quatre principes : comprendre avant de proposer, expliquer les compromis, recommander une solution adaptée même si elle réduit le besoin d'intervention, et préparer l'autonomie ou le passage de relais.

La FAQ doit répondre au minimum à ces questions :

- **Faut-il savoir coder ?** Le premier échange et les explications doivent rester accessibles ; le besoin est décrit avec les mots du visiteur.
- **L'échange gratuit comprend-il le diagnostic ?** Il sert à comprendre la situation et vérifier l'adéquation ; l'analyse approfondie est une mission payante distincte.
- **Les corrections sont-elles incluses ?** Non ; le diagnostic fournit des constats, une restitution et un plan. Une implémentation peut faire l'objet d'un devis séparé.
- **Jean peut-il intervenir sur mon outil ou ma technologie ?** Le projet et les accès sont examinés avant engagement ; aucune compatibilité universelle n'est promise.
- **Que puis-je faire du plan ?** L'utiliser avec un outil IA, le confier à un développeur ou demander une proposition d'implémentation à Jean.
- **Combien coûte la mission et combien de temps prend-elle ?** Le périmètre, le prix et le délai sont convenus avant de commencer.

## 7. Parcours de réservation

**Retenu dans le brief, avec durée ajustée par Jean pendant l’implémentation :** réserver un échange gratuit de 30 minutes et décrire son blocage pendant la réservation.

**Choix pendant l’implémentation :** utiliser une page de réservation externe, plutôt qu’un formulaire développé dans le site. Le lien Notion fourni par Jean est connecté pour l’aperçu ; Jean fournira un calendrier avec un champ de description obligatoire pour le parcours final. Le choix doit permettre une durée de 30 minutes, un champ de description obligatoire, des disponibilités réellement tenables et une confirmation du rendez-vous.

| Champ proposé | Caractère | Utilité |
| --- | --- | --- |
| Nom | Obligatoire | Identifier le participant |
| Adresse e-mail | Obligatoire | Envoyer la confirmation et les informations du rendez-vous |
| Projet ou blocage | Obligatoire | Préparer l'échange, y compris pour une demande d'accompagnement |
| Outil utilisé | Facultatif | Donner un contexte technique sans exclure ceux qui ne savent pas |
| Objectif recherché | Facultatif | Comprendre ce que le visiteur souhaite débloquer |

Le visiteur choisit un créneau, renseigne son contexte et reçoit une confirmation avec la date, l'heure, le fuseau horaire et les modalités pour rejoindre l'échange. Les fonctions de modification ou d'annulation dépendent de l'outil retenu et doivent être vérifiées avant publication.

Ne demander ni mot de passe, ni clé API, ni accès au dépôt, ni données sensibles. Une aide près de la description peut préciser : « Quelques phrases suffisent. Ne partagez pas de mot de passe ni de données confidentielles. »

**États à prévoir :** formulaire incomplet signalé par l'outil, absence de créneau, échec de réservation et confirmation. Un contact professionnel de secours pourra être proposé après confirmation de son adresse ou de son canal par Jean. Ne pas afficher de succès lorsque le visiteur a seulement cliqué sur le CTA.

L'absence d'URL valide ne bloque pas la construction locale. Elle bloque la publication de la version commerciale avec des CTA actifs : aucun lien fictif ou bouton inerte ne doit être présenté comme une réservation fonctionnelle.

## 8. Présentation de Jean et expériences

Jean est présenté comme ingénieur logiciel, pédagogue et entrepreneur, reliant les choix techniques aux besoins de l'entreprise. Le portrait existant peut être conservé pour une première maquette ; le portrait final reste à confirmer.

Une expérience Lovable peut être racontée à la première personne, anonymisée et qualifiée comme expérience personnelle : symptômes observés, reprise du projet, structuration, méthodes et passage de relais. Elle ne doit devenir ni un témoignage client ni une démonstration de résultats mesurés. La mission racontée incluait des interventions ; cela ne change pas le périmètre du diagnostic proposé aujourd'hui.

Les noms d'entreprises, logos, citations, chiffres de formation et détails identifiants attendent confirmation de leur caractère publiable. En attendant, omettre ces éléments et conserver une présentation personnelle factuelle. Aucun emplacement de témoignage fictif, compteur de clients, taux de satisfaction ou résultat financier ne doit être créé.

## 9. Direction visuelle et accessibilité

**Retenu dans le brief :** univers ludique, stickers et bords arrondis, avec une personnalité accessible et directe. L'imagerie Vibe Doctor reste localisée à la prestation ; Jean demeure le sujet de la page.

**Proposition V1 :** fond clair chaud, texte sombre, accent violet et touches pastel dans les stickers. Cartes arrondies, espaces généreux et hiérarchie forte. Une typographie système permet de lancer sans dépendance à une police externe. La palette exacte et le portrait sont à confirmer ; les contrastes priment sur la couleur proposée.

Les stickers sont décoratifs et ne portent pas seuls une information. Éviter les animations indispensables à la compréhension. Les éventuelles animations respectent la préférence de réduction des mouvements.

Exigences de recette :

- Page utilisable de 320 px à un écran de bureau, sans défilement horizontal.
- Contenu lisible avec un zoom à 200 %, sans perte d'accès aux actions.
- Navigation et FAQ utilisables au clavier ; focus visible et ordre logique.
- Un titre principal, titres de sections cohérents et zones sémantiques de navigation, contenu et pied de page.
- Liens nommés explicitement, portrait avec texte alternatif pertinent et décorations ignorées par les lecteurs d'écran.
- Contraste d'au moins 4,5:1 pour le texte courant et 3:1 pour le grand texte ; zones tactiles proposées d'au moins 44 × 44 px pour les actions principales.
- CTA visible dès la présentation initiale et après la FAQ, sans élément flottant qui masque le contenu.

## 10. Exigences techniques

**Proposition V1 :** conserver une page statique compatible avec l'hébergement GitHub Pages existant. Utiliser HTML et CSS, avec JavaScript limité aux interactions qui le nécessitent. Aucun framework ni processus de compilation n'est requis pour ce périmètre.

Préserver le fichier `CNAME` et les liens professionnels pertinents. Les styles et ressources peuvent être séparés de `index.html` pour faciliter la maintenance. Le contenu, la navigation, les CTA et la FAQ doivent rester utilisables sans JavaScript, par exemple avec des éléments natifs pour la FAQ.

Prévoir une langue française déclarée, un titre de page descriptif centré sur Jean, une description de référencement et des métadonnées de partage cohérentes. Ne pas ajouter de données structurées d'avis ou de notes sans preuves correspondantes. Préparer les médias avec dimensions explicites et poids réduit ; charger de manière différée ceux situés sous la première vue.

La V1 ne stocke aucune soumission localement et n'inclut aucun secret dans les fichiers ou l'URL. Le prestataire de réservation traite le formulaire ; les informations présentées au visiteur doivent correspondre à son fonctionnement réel. Les coordonnées et informations de publication nécessaires sont à compléter selon la situation réelle de Jean, sans valeurs inventées.

## 11. Mesure et apprentissage

**Retenu dans le brief :** les premières conversations et missions servent à affiner les publics, l'offre et l'hypothèse de prix. L'objectif initial de cinq échanges de prospection est un objectif d'apprentissage interne, pas une preuve à afficher.

**Proposition V1 :** suivre manuellement les réservations, échanges réalisés, demandes adaptées, propositions envoyées et missions acceptées. Noter les symptômes, outils et questions récurrentes pour améliorer les textes et le cadrage.

Une mesure de clics pourra être ajoutée ultérieurement si un outil approprié est choisi. Distinguer les clics sur le CTA des réservations confirmées ; ne pas annoncer un taux de conversion en réservation sans source de confirmations. Aucune description de blocage, adresse e-mail ou autre donnée du formulaire ne doit être envoyée à un outil de mesure de navigation.

Aucun objectif chiffré de conversion n'est fixé sans données initiales. La rentabilité et la capacité sont évaluées en interne à partir du périmètre réel, des coûts et de la disponibilité ; l'argumentaire public reste fondé sur la valeur pour le client.

## 12. Critères d'acceptation

La première version est prête à publier lorsque les conditions suivantes sont remplies :

| Référence | Critère vérifiable |
| --- | --- |
| A1 | La première vue identifie Jean, explique son rôle et propose l'échange gratuit de 30 minutes. |
| A2 | Vibe Doctor occupe la place principale parmi les services, sans remplacer l'identité de Jean. |
| A3 | Le diagnostic expose l'analyse cadrée, la restitution et le plan priorisé ; les corrections sont explicitement séparées. |
| A4 | L'accompagnement conserve la posture de conseil, la décision du dirigeant et la mention de l'IA dans les méthodes de l'équipe. |
| A5 | Tous les CTA principaux ouvrent la bonne page de réservation ; une réservation de test confirme la durée et la description obligatoire. |
| A6 | Le parcours distingue premier échange, engagement payant et éventuelle implémentation, sans annoncer de prise en charge universelle. |
| A7 | Aucun tarif hypothétique, bonus, engagement de suivi ou résultat non confirmé n'est publié comme acquis. |
| A8 | Aucun témoignage ni chiffre inventé n'apparaît ; les expériences publiées respectent leur statut et les autorisations confirmées. |
| A9 | Les exigences mobile, zoom, clavier, contrastes et réduction des mouvements de la section 9 sont vérifiées. |
| A10 | Le contenu et les liens restent fonctionnels sans JavaScript ; les liens internes et externes ont été contrôlés. |
| A11 | Aucun secret ni collecte d'accès technique ne figure dans le site ou le formulaire public. |
| A12 | Le titre, la description de page, les médias et le rendu sur mobile et bureau ont été vérifiés ; `CNAME` est préservé. |

La recette utilise une prévisualisation locale, au moins un format mobile et un format bureau, un parcours au clavier et une réservation de test clairement identifiée. Les vérifications du site peuvent être réalisées avant que le prestataire de réservation soit configuré ; A5 reste alors ouverte.

## 13. Points à confirmer et traitement par défaut

| Point ouvert | Proposition ou traitement en attendant | Moment nécessaire |
| --- | --- | --- |
| Titre exact et registre | Maquette avec le rôle et le vouvoiement proposés en section 5 | Avant publication des textes |
| Calendrier et collecte du contexte | Durée de 30 minutes confirmée ; nouveau lien avec description obligatoire attendu de Jean | Avant validation complète du parcours de réservation |
| Contact de secours et informations de publication | Ne pas inventer de coordonnées ou d'identité juridique | Avant publication des informations concernées |
| Portrait et palette | Portrait existant pour la maquette, direction visuelle de la section 9 | Avant finalisation visuelle |
| Prix et TVA | Aucun montant public ; 500 € reste une hypothèse interne | Avant proposition commerciale chiffrée |
| Profondeur, livrables détaillés et délais du diagnostic | Afficher les trois composantes retenues ; cadrer le détail par mission | Avant engagement sur une mission |
| Clarification pendant 14 jours, remboursement et bonus | Ne pas les annoncer | Avant tout engagement correspondant |
| Cadence et disponibilité de l'accompagnement | Présentation générale et périmètre convenu au cas par cas | Avant vente d'un accompagnement |
| Noms, témoignages et chiffres d'expérience | Omettre les éléments non confirmés | Avant leur publication éventuelle |
| Formation et ressources | Aucun catalogue ni produit disponible annoncé | Lors d'une version ultérieure |
| Outil de mesure | Suivi commercial manuel, sans script de mesure ajouté par défaut | Avant instrumentation éventuelle |

Ces points permettent de préparer une page complète sans convertir les hypothèses de l'entretien en engagements commerciaux. Les confirmations concernant une mission n'empêchent pas le lancement d'une page qui annonce un cadrage au cas par cas.

## 14. Ordre d'implémentation proposé

1. Construire la structure sémantique et les textes à partir des exigences retenues et des propositions V1.
2. Appliquer la direction visuelle, les adaptations mobiles et les interactions accessibles.
3. Compléter les informations publiables et connecter le parcours de réservation choisi.
4. Vérifier les critères d'acceptation, corriger les écarts et présenter la version concrète à Jean.
5. Publier dans le cadre d'une demande de mise en ligne, puis affiner l'offre et la page à partir des premiers échanges.

La rédaction de ce PRD ne modifie pas la page actuelle et ne déclenche aucune publication.

## 15. Lot — Parcours et portfolio

**État au 8 octobre 2026 : implémenté localement à la demande de Jean.** La page comprend une synthèse du parcours LinkedIn, quatre cartes d’expériences et trois projets Obsidian : Dot Navigator, Auto Expander et Workflow Boards. Deux captures réelles de Dot Navigator, des illustrations de principe pour les autres projets et des indicateurs datés complètent les cartes. Les [sources et règles de mise à jour](sources-parcours-portfolio.md) sont documentées. Les vérifications figurent dans la [recette](recette-page-services.md). Aucune publication n’a été effectuée.

**Demandé par Jean le 7 octobre 2026 :** prévoir un lot ultérieur pour mettre en avant son expertise à partir de son parcours LinkedIn et de ses réalisations. Le cadrage initial de ce lot est conservé ci-dessous ; la sélection implémentée est décrite dans les sources liées ci-dessus.

### Objectif

Donner au visiteur des éléments concrets pour comprendre l'expérience de Jean et sa capacité à concevoir, développer et transmettre. Relier les expériences et réalisations aux besoins des clients : prendre des décisions techniques, faire avancer un produit et gagner en autonomie. Jean reste au premier plan, avec son positionnement souhaité de CTO à temps partagé et sa posture de conseil.

### Parcours professionnel

- Reprendre le [profil LinkedIn de Jean](https://www.linkedin.com/in/jean-sordes/) et les éléments déjà relevés dans la section 8 du brief ; vérifier les rôles, dates et informations avant publication.
- Sélectionner les expériences qui éclairent son expertise en ingénierie logicielle, conseil, entrepreneuriat et pédagogie. Privilégier une synthèse compréhensible pour un dirigeant plutôt qu'une reproduction exhaustive du CV.
- Pour chaque expérience retenue, préciser le contexte, le rôle de Jean et ce qu'elle illustre pour le client. Distinguer les responsabilités déclarées des résultats vérifiables ; confirmer les éléments publiables.

### Portfolio de réalisations

- Inventorier les projets GitHub de Jean et ses plugins Obsidian, puis sélectionner les réalisations les plus pertinentes pour illustrer son expertise. **Selon Jean**, plusieurs projets disposent de stars ou de téléchargements ; les projets et chiffres exacts restent à identifier et à vérifier.
- Préparer pour chaque réalisation une fiche courte : besoin utilisateur, application ou plugin, contribution de Jean, choix ou difficultés significatifs, lien vers le dépôt et, lorsque disponible, vers une démonstration ou la fiche Obsidian.
- Rassembler des captures de l'application pour montrer concrètement le résultat, avec une légende accessible à un public non technique. Vérifier leur caractère publiable et éviter les données confidentielles ; prévoir des images légères et des textes alternatifs utiles.
- Relever les stars GitHub et téléchargements Obsidian pertinents avec leur source et leur date de consultation. Préciser ce que mesure chaque indicateur : les téléchargements ne sont pas un nombre d'utilisateurs actifs, et les stars ne prouvent pas un résultat commercial ni la qualité d'une mission de conseil.

### Livrables et pistes de présentation

**À travailler dans ce lot :** une sélection argumentée d'expériences et de projets, les textes correspondants, les captures et un relevé des preuves avec leurs sources. Explorer une synthèse du parcours dans « À propos » et des cartes de portfolio dans l'univers ludique existant ; le nombre de projets et leur placement restent à décider. Préserver la lisibilité des offres et le parcours de réservation.

**Critères d'acceptation du lot :** les faits et indicateurs affichés sont sourcés et vérifiés, la contribution de Jean est explicite, les captures et liens correspondent aux projets présentés, et aucun témoignage ou résultat n'est inventé. Une mise à jour manuelle des indicateurs peut suffire ; aucune intégration automatique GitHub ou Obsidian n'est décidée à ce stade.

## 16. Lot — Deux offres lisibles et intervention urgente

**Cadrage et implémentation demandés par Jean le 11 octobre 2026. Statut : implémenté localement, sans publication.** Ce lot transforme la présentation commerciale pour faire comprendre immédiatement les deux façons de travailler avec Jean : lui confier un blocage précis sur un projet existant, ou être accompagné dans les choix et la progression de son entreprise.

La page présente les deux offres dès l'introduction, avec leurs ancres dans une navigation persistante. Le repère actif suit aussi les sections hors offres. L'intervention comprend les corrections et s'appuie sur la collaboration avec le client ; les stickers 🔥 et la FAQ reprennent ce positionnement. Le parcours et les détails des projets sont dépliables, avec leurs sources conservées. L'Easter egg du portrait termine sa boucle dans l'espace visible sous la navigation. Le visuel de partage existant a été inspecté : il ne comporte aucune référence médicale et reste utilisable. Les contrôles sont consignés dans la [recette du lot 16](recette-page-services.md#lot-16--deux-offres-et-intervention-urgente--11-octobre-2026).

Le calendrier existant reste raccordé ; son remplacement pour recueillir obligatoirement le contexte est toujours reporté à la demande de Jean. Le délai de sept jours et la garantie attendent les modalités décrites ci-dessous et ne sont pas affichés comme des engagements acquis.

### Décisions de Jean et portée du changement

- **Retenu :** le titre public de l'offre ponctuelle est **« Intervention urgente »**. Jean privilégie les missions pour débloquer ou corriger un projet existant.
- **Retenu :** abandonner Vibe Doctor, le doctor et l'univers médical dans la prochaine version publique. **Vibe Fixer** a été évoqué comme nom possible ; il reste facultatif et ne remplace pas le titre choisi ni l'identité de Jean.
- **Retenu :** adopter l'image du pompier qui éteint le feu, avec des **emoji 🔥 en stickers** et l'univers ludique à bords arrondis existant.
- **Retenu, précisé ensuite par Jean :** rassurer par une présence compétente et une intervention menée ensemble. Le visiteur explique sa situation et participe aux échanges ; Jean apporte son expertise, mène le travail technique et aide à débloquer le projet. La promesse émotionnelle est **« Vous n'êtes plus seul face au problème »**. La formulation « je prends tout en charge » est retirée : Jean souhaite une collaboration concrète dans l'urgence, et non un service de luxe ou une livraison clé en main sans participation du client.
- **Retenu :** le CTA de cette offre est **« Préparons une intervention »**, à la place de « Parlons de votre blocage » ou d'un équivalent centré sur une simple discussion.
- **Retenu :** la seconde offre est un accompagnement plus complet, avec conseil, coaching et suivi. Elle aide notamment les dirigeants à découvrir ce qui est possible avec l'IA et à choisir les évolutions utiles pour leur entreprise.
- **Demande commerciale à concrétiser :** livraison ultra rapide, avec une cible de **7 jours maximum**. Le point de départ, le décompte des jours, les conditions de livraison et la capacité à tenir cet engagement restent à définir.
- **Hypothèse évoquée par Jean :** une garantie si le problème n'est pas résolu. Le remboursement a été proposé dans la discussion ; sa forme, son montant et son déclenchement ne sont pas encore arrêtés.

Le changement porte sur la prestation vendue, au-delà de son nom : **l'intervention urgente comprend les corrections du blocage confié**. La règle V1 « diagnostic avec corrections séparées » ne décrit donc plus cette offre. Une analyse préalable approfondie peut encore nécessiter une proposition distincte, mais un diagnostic autonome n'est pas ajouté comme troisième offre principale. Son éventuelle facturation reste à préciser.

### Objectif et valeur pour le visiteur

Le visiteur doit pouvoir choisir son entrée sans lire tous les détails techniques :

| Entrée | Situation du visiteur | Valeur attendue |
| --- | --- | --- |
| Intervention urgente | « Mon projet existe, je sais ce qui doit fonctionner et quelque chose bloque. » | Être rejoint par un expert, faire le point ensemble et débloquer le projet avec une aide technique concrète. |
| Accompagnement | « Je sais où je veux emmener mon entreprise, mais je ne connais pas toutes les possibilités ni les bonnes étapes. » | Identifier les opportunités, décider des priorités et progresser avec du conseil, du coaching et un suivi. |

Le visiteur n'a pas besoin d'identifier la cause technique ni de prescrire une solution. Il explique le contexte, ce qu'il veut pouvoir faire, ce qui l'en empêche et les tentatives déjà réalisées. Jean guide l'exploration du problème et réalise les interventions techniques ; le client apporte les informations et retours nécessaires et participe à la validation du résultat. Cette collaboration n'exige pas que le client sache coder. Le prix se construit autour du blocage levé, du temps gagné et de la capacité retrouvée à avancer. Le temps de travail sert à vérifier la rentabilité en interne.

### Argumentaire et textes de référence

**Direction éditoriale retenue :** parler à la première personne, avec des verbes d'action, une présence rassurante et un « ensemble » concret. Le lecteur doit ressentir du soulagement : quelqu'un rejoint son projet, sait où regarder et l'aide à gérer l'urgence. Le registre est celui du pompier qui vient aider et se retrousse les manches avec lui. Exprimer le calme et la solidarité sans accentuer la panique. Les détails de qualification et de contrat sont traités dans le parcours de préparation, avec une FAQ concise pour les informations utiles à la décision.

**Proposition de rédaction pour la section urgente :**

> **Intervention urgente**
>
> **Votre projet prend feu ? Vous n'êtes plus seul.**
>
> Votre application bloque, une fonctionnalité ne répond plus ou les bugs s'accumulent ? Vous m'expliquez ce qui se passe, et on se retrousse les manches ensemble.
>
> Je vous aide à comprendre ce qui coince, j'interviens sur le projet et nous vérifions ensemble que le problème est résolu. On éteint le feu pour vous permettre d'avancer à nouveau.
>
> **Préparons une intervention**

Les formulations exactes peuvent être affinées pendant l'implémentation. Conserver le titre et le CTA choisis par Jean. Éviter une succession de « je peux peut-être », « voir si je peux aider » ou une promesse limitée à fournir un plan d'action. Décrire l'aide concrète de Jean, la participation du client et le résultat attendu. Ne pas employer « je prends tout en charge », « vous n'avez rien à faire » ou un argumentaire de délégation totale. La collaboration doit rester accessible et soutenante, sans donner l'impression que le client devra assurer lui-même les corrections techniques.

**Ligne commerciale à finaliser :** « Livraison sous 7 jours maximum. » La promesse chiffrée sera associée au démarrage et aux conditions définis pour l'offre. Une éventuelle formulation « Problème non résolu : intervention remboursée » reste une proposition jusqu'à définition de la garantie ; elle ne constitue pas une décision déjà validée.

Jean mène le travail technique et le client contribue par son contexte, les accès nécessaires et ses retours. Le dirigeant conserve les décisions concernant son entreprise et son projet. Aucune disponibilité permanente, compatibilité universelle, absence totale de bugs ou sécurité absolue n'est convenue.

### Parcours de l'intervention et engagements à préciser

Le parcours public doit rester simple et actif :

1. **Préparons l'intervention.** Le visiteur réserve l'échange gratuit de 30 minutes et décrit son projet, le blocage et le résultat souhaité. Le raccordement du calendrier avec description obligatoire reste à terminer conformément à la section 7.
2. **On organise l'intervention.** Jean examine le projet et les accès nécessaires, puis convient avec le client du résultat à livrer, du prix et de la date de démarrage. L'échange gratuit prépare la mission ; cliquer sur le CTA ne réserve pas automatiquement une intervention payante.
3. **On éteint le feu.** Jean guide la recherche des causes et réalise les corrections techniques. Le client explique le fonctionnement attendu, répond aux questions utiles et partage ses observations ; Jean l'aide à comprendre ce qui se passe et les prochaines actions.
4. **On vérifie ensemble.** Jean et le client vérifient le parcours concerné et le résultat attendu. La livraison comprend la correction, une explication des changements et les informations nécessaires pour poursuivre. Préciser si la livraison comprend une mise en production ou une remise prête à déployer.

**À formaliser avant publication des engagements correspondants :**

- Définition du résultat et critères de validation observables ; par exemple, un utilisateur peut se connecter et accéder à son espace.
- Types de projets pris en charge, accès nécessaires et traitement d'une demande qui exige une refonte plus large.
- Décompte des sept jours, date de début et traitement des dépendances ou modifications de la demande. La date de livraison doit être compréhensible avant engagement.
- Garantie : événement déclencheur, montant remboursé, traitement d'une analyse facturée séparément et procédure applicable.
- Modalités du point d'avancement et durée d'un éventuel suivi après livraison.
- Disponibilité et nombre de missions simultanées soutenables pour Jean ; aucun compteur de places ou délai de réponse n'est inventé sur la page.

### Accompagnement et ambition de l'entreprise

Présenter l'accompagnement comme la deuxième voie à part entière : le dirigeant a une ambition, Jean l'aide à explorer les possibilités, choisir les priorités et faire progresser son entreprise et son équipe.

L'ambition « devenir une entreprise AI first » exprimée par Jean est traduite en bénéfices compréhensibles : alléger des tâches répétitives, améliorer le service rendu, mieux exploiter les informations et gagner en autonomie. Les objectifs précis se construisent avec le client. Le rôle de Jean reste celui d'un CTO à temps partagé dans une posture de conseil, avec le dirigeant qui décide.

**Proposition de rédaction :** « Vous savez où vous voulez aller. Je vous aide à trouver le chemin. Ensemble, nous identifions les usages utiles de l'IA, choisissons les priorités et faisons progresser votre équipe avec du conseil, du coaching et un suivi. »

Une cartographie des opportunités, une feuille de route et un premier usage à tester sont des pistes de livrables, à formaliser. La cadence, la disponibilité et les interventions opérationnelles éventuelles se définissent dans l'offre ; aucun abonnement illimité n'est ajouté par défaut.

### Architecture et repères persistants

**Exigence issue de la demande de Jean :** afficher les deux offres dès la présentation initiale, avant les symptômes détaillés. Garder au défilement des repères visibles en haut de page pour comprendre la partie consultée et rejoindre l'autre offre.

**Proposition d'ordre :** présentation de Jean et des deux formats → intervention urgente → accompagnement → approche et preuves → FAQ → invitation à commencer. Les symptômes deviennent quelques exemples dans l'intervention urgente. Le parcours et le portfolio servent à étayer les offres ; leur présentation peut être condensée, avec accès aux détails, afin de préserver une lecture simple.

Les libellés des offres sont **« Intervention urgente »** et **« Accompagnement »**. Le repère actif suit la section consultée et distingue les sections consacrées aux offres des sections de présentation, de preuves et de questions. Il ne doit pas désigner une offre comme active lorsque le visiteur lit une autre partie de la page. Les détails d'un bloc d'offre restent associés à ce même bloc.

Prévoir sur mobile un accès visible aux deux offres. La navigation persistante doit conserver des cibles tactiles suffisantes, un focus visible et un décalage des ancres adapté à sa hauteur. Elle ne masque ni titres, ni contenu, ni CTA. Les liens fonctionnent sans JavaScript ; le suivi de la section active peut être une amélioration JavaScript. L'Easter egg local au portrait conserve le fonctionnement déjà demandé ; la navigation répond à un besoin de repérage des offres.

### Direction visuelle et cohérence de publication

- Ajouter des stickers **🔥** autour du bloc d'intervention et de ses illustrations, avec un traitement arrondi cohérent avec le site. L'emoji est décoratif et ignoré par les lecteurs d'écran ; le sens est porté par le texte.
- Montrer le passage d'un projet qui bloque à un projet repris en main. L'expression de Jean et l'ensemble de la composition doivent rassurer ; éviter une surcharge de flammes ou un effet d'alarme.
- Conserver l'identité « Jean Z. Sordes », son portrait et sa personnalité. L'univers pompier illustre l'intervention urgente ; l'accompagnement conserve sa propre lecture.
- Remplacer les références médicales dans les titres, textes, navigation, FAQ, textes alternatifs et métadonnées. Adapter les visuels de partage s'ils comportent ces références. Les documents historiques conservent les anciens termes pour la traçabilité.
- Mettre à jour la FAQ pour expliquer le rôle technique de Jean, la participation du client (contexte, accès, retours et validation), le démarrage, la livraison, les engagements définis et la différence avec l'accompagnement. Rassurer les visiteurs non techniques : participer n'exige pas de savoir coder. Les réponses V1 relatives aux corrections toujours séparées doivent être réécrites.
- Le CTA « Préparons une intervention » utilise le parcours de réservation existant. Les CTA de l'accompagnement sont adaptés à cette intention et restent cohérents avec l'échange gratuit de 30 minutes. Chaque action indique clairement sa destination ; le formulaire de contexte n'est pas simulé localement.

### Pistes ultérieures évoquées

Les webinaires ou ateliers payants et un widget d'orientation restent des **pistes à explorer**, sans lancement inclus dans ce lot. La recommandation discutée est un outil aidant à choisir une première action utile, puis une orientation vers l'intervention ou l'accompagnement. Le contenu, le modèle commercial et la réalisation de ces pistes nécessitent un cadrage distinct ; ils ne deviennent pas des offres disponibles par leur mention dans le PRD.

### Livrables et critères d'acceptation

Le lot comprend les textes des deux offres, la nouvelle hiérarchie de la page, la navigation persistante avec repère actif, les stickers 🔥, la mise en cohérence de la FAQ et des métadonnées, puis la recette sur mobile et bureau. Ces changements sont réalisés localement ; aucune publication n'a été déclenchée.

| Référence | Critère vérifiable |
| --- | --- |
| L16-1 | La présentation initiale permet d'identifier Jean et les deux formats avant les détails ; le visiteur distingue un blocage à confier d'un besoin d'accompagnement. |
| L16-2 | Le titre de l'offre ponctuelle est « Intervention urgente » et son CTA « Préparons une intervention ». |
| L16-3 | L'offre exprime « vous n'êtes plus seul » et une intervention menée ensemble : Jean mène le travail technique ; le client apporte le contexte et participe aux échanges et à la validation. Aucun texte ne promet une délégation totale ou un client sans rien à faire. |
| L16-4 | Les éléments publics de la page et de son partage ne présentent plus Vibe Doctor ni une identité médicale ; les stickers 🔥 illustrent l'intervention sans gêner la lecture. |
| L16-5 | Les deux offres restent accessibles dans la navigation au défilement, sur mobile et bureau ; le repère actif correspond au contenu consulté, y compris hors des offres. |
| L16-6 | Les ancres, le clavier, le zoom à 200 % et les formats à partir de 320 px restent utilisables ; aucune barre ne masque les titres ou actions et aucun débordement horizontal n'est introduit. |
| L16-7 | Le parcours distingue la préparation gratuite et l'intervention payante ; les liens ouvrent le calendrier réel et le statut du champ de description est vérifié. |
| L16-8 | Le délai de sept jours et une éventuelle garantie sont publiés avec des modalités définies ; aucun engagement supplémentaire n'est déduit du vocabulaire de prise en charge. |
| L16-9 | L'accompagnement expose l'orientation, le conseil, le coaching et le suivi, avec des usages utiles de l'IA et la décision finale du dirigeant. |
| L16-10 | Parcours, portfolio et FAQ renforcent les deux offres ; les webinaires et le widget ne sont pas annoncés comme déjà disponibles. |

Pour ce lot, ces critères remplacent A2, A3 et les formulations V1 d'A6 sur le diagnostic et les corrections séparées. Les autres critères de la section 12 restent applicables, avec les noms, contenus et CTA actualisés.

## 17. Évolution — Pompier, Vibe Doctor et portfolio en carrousel

**Orientation exprimée par Jean le 11 octobre 2026. Statut : implémenté localement, sans publication.** Jean souhaite explorer de nouveau le rôle du docteur, cette fois comme deuxième voie de diagnostic et de suivi dans la durée. Le portfolio occupe moins d'espace visuel avec une présentation en carrousel.

La page présente désormais « Intervention urgente » et « Vibe Doctor », avec les textes, la navigation, la FAQ et les métadonnées correspondants. Le portfolio affiche un projet à la fois, avec sélection par nom, précédent/suivant, compteur et navigation au clavier. Les détails, sources et liens restent accessibles sans JavaScript. Les contrôles sont consignés dans la [recette du lot 17](recette-page-services.md#lot-17--pompier-vibe-doctor-et-carrousel--11-octobre-2026).

### Deux situations, deux offres

| Offre | Situation du visiteur | Contribution de Jean |
| --- | --- | --- |
| Intervention urgente — le pompier | Un blocage précis sur un projet existant empêche d'avancer et demande une réparation. | Jean intervient sur le problème, réalise les corrections et vérifie le résultat avec le client. |
| Vibe Doctor — diagnostic et suivi | Le visiteur veut comprendre ce qu'il faut améliorer, découvrir les possibilités et choisir comment faire évoluer son projet ou son entreprise. | Jean examine la situation, explique les options, recommande les priorités et accompagne la progression dans la durée avec conseil, coaching et suivi. |

La mise en avant commerciale utilise ces deux rôles. Jean Z. Sordes reste l'identité principale. « CTO à temps partagé » peut éclairer son expérience ou son rôle professionnel, mais n'est plus le titre de la deuxième offre ni l'accroche principale. La direction technique, les besoins de l'entreprise et la décision finale du dirigeant restent présents dans le contenu.

L'expression « vous avez du temps » utilisée pour explorer cette distinction est traduite en un bénéfice actif : comprendre ce qu'il faut améliorer, choisir les bonnes priorités et préparer la suite. Le visiteur peut déjà utiliser l'IA ou souhaiter découvrir ses possibilités ; les recommandations restent liées à ses besoins, aux méthodes de l'équipe et à ses moyens.

### Contenu et parcours de Vibe Doctor

- Présenter explicitement **« Vibe Doctor »** et **« Diagnostic et suivi »** dans la carte de choix et dans la section de l'offre. Le lien de navigation utilise « Vibe Doctor » et le repère actif suit ce même libellé.
- Expliquer la progression : faire le point sur la situation, restituer les constats et les options, prioriser les prochaines actions, puis suivre leur mise en œuvre et aider l'équipe à progresser.
- Conserver la valeur d'un diagnostic compréhensible et d'un plan d'action exploitable. Le suivi régulier est présenté comme une suite à organiser avec le client ; sa cadence et ses modalités ne sont pas inventées.
- Mentionner le conseil, le coaching, l'autonomie et les usages utiles de l'IA. L'offre ne se limite pas à analyser du code généré avec l'IA ni à multiplier les outils.
- Les modifications opérationnelles éventuelles sont cadrées dans une proposition adaptée. L'offre n'annonce pas un abonnement incluant toutes les réparations ou tous les développements.
- **CTA proposé pour cette version : « Préparons un diagnostic »**, vers le même échange gratuit de 30 minutes. L'échange prépare la prestation ; il ne constitue pas le diagnostic approfondi ou un abonnement déjà acheté.

Le retour du docteur ne rétablit pas l'ancien diagnostic V1 comme troisième offre. Les corrections du blocage convenu restent incluses dans l'intervention urgente, avec « Préparons une intervention », les stickers 🔥 et la collaboration client/Jean. La FAQ distingue la réparation urgente de la compréhension, des priorités et du suivi.

Actualiser les textes, cartes, navigation et métadonnées pour refléter les deux offres. Les éléments graphiques du docteur restent propres à cette prestation. Le visuel de partage existant mentionne le rôle professionnel de Jean sans nommer l'ancienne offre ; sa conservation ne constitue pas une troisième offre.

### Portfolio : un projet à la fois

La grille actuelle est remplacée par un **carrousel manuel**, sur mobile comme sur ordinateur. Un projet occupe la zone visible ; les trois réalisations restent disponibles, avec leurs captures ou illustrations, leurs contributions, leurs liens et les preuves datées.

- Navigation précédente/suivante et indicateur explicite du projet consulté, par exemple « 1 / 3 ». Les limites de la collection sont compréhensibles.
- Défilement tactile et horizontal natif, avec alignement du projet dans la zone visible. Le défilement reste contenu dans le portfolio et ne crée pas de débordement de toute la page.
- Commandes utilisables au clavier, nommées pour les lecteurs d'écran ; annoncer le changement de projet de façon concise et conserver un focus compréhensible.
- Aucun défilement automatique. Respecter la réduction des mouvements pour les déplacements manuels.
- Conserver les détails natifs dépliables, notamment la galerie de Dot Navigator. Le projet reste entièrement lisible lorsque ses détails sont ouverts.
- Sans JavaScript, tous les projets et liens restent consultables avec le défilement natif. Les commandes qui nécessitent JavaScript sont affichées seulement lorsqu'elles fonctionnent.
- Utiliser HTML, CSS et un script local limité à l'interaction. Aucun framework, bibliothèque de carrousel ni collecte supplémentaire n'est ajouté.

La conception suit les principes de contrôle utilisateur, de clavier et d'annonce des changements du [guide WAI sur les carrousels](https://www.w3.org/WAI/tutorials/carousels/).

### Critères d'acceptation

| Référence | Critère vérifiable |
| --- | --- |
| L17-1 | Les deux offres présentées dès l'introduction et dans la navigation sont « Intervention urgente » et « Vibe Doctor », avec réparation d'un côté, diagnostic et suivi de l'autre. |
| L17-2 | Vibe Doctor décrit les constats, les options, les priorités et le suivi avec conseil/coaching ; la décision finale du dirigeant et les modalités à convenir sont conservées. |
| L17-3 | Le CTA du docteur prépare un diagnostic via l'échange gratuit ; celui de l'intervention reste « Préparons une intervention ». Les destinations sont cohérentes et réelles. |
| L17-4 | Titres, textes, FAQ, métadonnées et repères actifs reflètent cette évolution, sans troisième offre ni retour implicite aux corrections toujours séparées de la V1. |
| L17-5 | Le portfolio montre un projet à la fois, avec navigation manuelle et indicateur de position ; les trois projets, preuves et liens sont conservés. |
| L17-6 | Le carrousel fonctionne au clavier et par défilement tactile/natif ; le focus, les limites de collection et les annonces sont compréhensibles ; aucun défilement automatique n'est ajouté. |
| L17-7 | Détails et galerie restent utilisables ; le carrousel demeure consultable sans JavaScript et respecte la réduction des mouvements. |
| L17-8 | Aucun débordement horizontal de la page à partir de 320 px, y compris avec détails ouverts ; rendu mobile/bureau et texte agrandi vérifiés. |
| L17-9 | La navigation persistante et la boucle d'identité sous cette navigation restent fonctionnelles après les changements de hauteur du portfolio. |

Ce lot remplace L16-4 sur l'absence d'univers médical et L16-9 sur le nom et la présentation de l'accompagnement. Les autres critères du lot 16 continuent de s'appliquer, avec les nouveaux libellés. Les paramètres de prix, délai, garantie, disponibilité et réservation déjà ouverts restent à préciser.

## 18. Évolution — Punchline, entrées visuelles et preuves du parcours

**Demandes de Jean implémentées localement les 11–12 octobre 2026, sans publication.** Les deux offres conservent leur contenu et prennent une place plus visible dès le haut de page. Deux passages à la télévision et des logos rendent le parcours plus concret. Les [sources](sources-parcours-portfolio.md#logos-et-passages-tv--1112-octobre-2026) et la recette précisent les vérifications et leurs limites.

### Message et choix des offres

- **Retenu :** punchline principale **« Face à l’IA, vous n’êtes plus seul »**, avec l'orthographe corrigée depuis « fasse » dans la demande. La solidarité, le conseil et le travail mené ensemble restent le fil conducteur.
- **Retenu :** nom public **« Vibe Pompier »**, avec le sous-titre « Réparation urgente ». Jean a choisi ce titre le 12 octobre 2026 pour remplacer « Vibe Urgence » et former un duo avec Vibe Doctor. Il remplace « Intervention urgente » comme titre, sans changer le fonctionnement de la prestation.
- **Retenu :** grands titres gras et emojis **feu/pompier** pour Vibe Pompier, **médecin/stéthoscope** pour Vibe Doctor, avec **rouge** pour la première offre et **bleu** pour la seconde.
- Appliquer ces repères aux deux liens de la navigation persistante et aux cartes de choix du hero. Les cartes sont placées immédiatement après la punchline, avant les détails de présentation ; les deux offres sont compréhensibles sans descendre jusqu'aux sections complètes.
- Les noms et les explications portent le sens ; les emojis restent décoratifs. Couleurs, contrastes, focus et tailles tactiles doivent préserver l'accessibilité.
- Conserver le CTA **« Préparons une intervention »** pour Vibe Pompier et **« Préparons un diagnostic »** pour Vibe Doctor, avec le calendrier réel de 30 minutes. La décision finale du client et les modalités commerciales déjà ouvertes restent explicites.

### Deux passages à la télévision

Jean a fourni deux vidéos et les points de départ de ses passages. L'API oEmbed de YouTube identifie l'émission comme **Bonsoir Bruxelles**, publiée par **BX1** :

| Émission | Vidéo | Départ |
| --- | --- | --- |
| 5 juin 2026 | [JgMDYGr0zY4](https://www.youtube.com/live/JgMDYGr0zY4?t=2430) | 40:30, soit 2 430 secondes |
| 17 avril 2026 | [nm2h6rb0BkY](https://www.youtube.com/live/nm2h6rb0BkY?t=2280) | 38:00, soit 2 280 secondes |

Une section « À la télévision » présente les deux passages, avec date, vignette de l'émission et liens vers les vidéos originales. Un lien depuis l'introduction permet de la rejoindre. La navigation indique cette partie comme une section hors offres.

Le lecteur intégré est chargé après activation du bouton de lecture, sur `youtube-nocookie.com`, avec le paramètre `start` correspondant. Aucun lecteur, script YouTube ou vignette distante n'est chargé à l'ouverture de la page. Les vignettes officielles sont conservées localement. La lecture automatique éventuelle fait suite au clic du visiteur. Le cadre reste dimensionné, nommé et accessible au clavier.

Les liens YouTube avec timestamps restent utilisables avec ou sans JavaScript. Les vidéos sont les émissions complètes démarrant au passage, sans fin d'extrait définie ni copie locale de la vidéo. La présence comme invité IA et les timestamps sont déclarés par Jean ; les titres, dates et auteur sont vérifiés avec oEmbed. Le navigateur automatisé rencontre un contrôle anti-bot YouTube : la lecture réelle et le contenu des passages restent à vérifier dans un navigateur habituel. Ne pas inventer de sujets précis, de citations ou de certification à partir des seules vignettes.

### Logos dans le parcours

Présenter les logos réels de **MolenGeek**, **Holberton School** et **Capgemini** avec les rôles déjà documentés : formation et campus, formation technique, développement Java en mission SNCF Fret. Les logos conservent leurs proportions et leurs couleurs, dans des cartes adaptées au mobile. Ils illustrent le parcours de Jean, sans devenir une liste de clients ni un témoignage de ces organisations sur les nouvelles offres.

Les fichiers sont copiés localement depuis des sources identifiées. Le logo MolenGeek publié par Molengeek sur Commons porte une licence CC BY-SA 4.0 ; son attribution et les liens vers la source et la licence figurent dans les détails du parcours. Holberton et Capgemini proviennent des fichiers référencés par leurs sites officiels. Aucun logo n'est inventé ou reconstruit. Associate Agency et Entrep Ensemble Lille restent présentés en texte, faute de source de logo fiable identifiée.

### Critères d'acceptation

| Référence | Critère vérifiable |
| --- | --- |
| L18-1 | La punchline « Face à l’IA, vous n’êtes plus seul » est le titre principal ; Jean reste identifié dans l'en-tête et l'introduction. |
| L18-2 | Les choix Vibe Pompier et Vibe Doctor sont grands et gras, rouge/bleu, avec les emojis demandés, dans la navigation et le hero. Leur sens reste compréhensible sans couleur ni emoji. |
| L18-3 | Les noms, sections, repères actifs, FAQ et métadonnées sont cohérents ; les modalités et CTA des offres sont conservés. |
| L18-4 | Les deux vidéos portent les titres et dates vérifiés, et leurs lecteurs/liens utilisent les départs 2 430 et 2 280 secondes. Les liens externes restent disponibles sans JavaScript. |
| L18-5 | Aucun appel vers YouTube avant une activation ; au clic, le cadre conserve sa taille, un titre explicite et un focus utilisable. La limite de vérification de lecture réelle est documentée. |
| L18-6 | Les trois logos sont lisibles et chargés localement, avec rôles exacts et sources documentées ; l'attribution nécessaire est consultable. |
| L18-7 | Rendu à partir de 320 px, clavier, texte agrandi, contrastes et navigation persistante contrôlés, y compris dans la nouvelle section TV ; carrousel et Easter egg préservés. |

Ce lot remplace les anciens libellés de L16-2 et L17-1/L17-4 sur l'offre urgente et les propositions de punchline/couleurs. Les autres critères restent applicables. Le visuel de partage existant est conservé comme présentation du parcours professionnel ; son texte alternatif décrit toujours son contenu réel.
