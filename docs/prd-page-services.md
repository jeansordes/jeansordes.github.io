# PRD de la page de services de Jean Sordes

Date : 7 octobre 2026. Version : 1. Statut : proposition de première version, prête à servir de base à l'implémentation.

Ce PRD décrit la transformation de la page personnelle de Jean Sordes en une page de services permettant de comprendre son approche, de découvrir le diagnostic Vibe Doctor et de réserver un échange gratuit de 30 minutes. Il s'appuie sur le [brief de référence](brief-page-services.md), qui reste la source des décisions commerciales et des limites des expériences racontées.

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
