# Visuel de partage

Créé le 11 octobre 2026 avec l’outil intégré `image_gen` et la compétence imagegen. Le visuel reprend le nom de Jean, le rôle et la promesse déjà présents sur la page, dans sa palette ivoire, violet et pastel. L’illustration évoque le passage d’un blocage à un plan clair.

Le visuel est destiné aux métadonnées Open Graph et à la carte de partage de grande taille. Il remplace le portrait dans l’aperçu du lien ; le portrait reste utilisé dans la page. Les plateformes ne pourront récupérer la nouvelle image qu’après publication du site et peuvent conserver temporairement un ancien aperçu en cache.

Première version : `assets/jean-sordes-partage.png`, 1 730 × 909 px, PNG RGB, environ 1,3 Mo. Cette version sans portrait est conservée dans le dépôt.

## Version avec portrait

À la demande de Jean le 11 octobre 2026, le visuel est édité avec l’outil intégré imagegen à partir de la première version et du portrait réel `assets/jean-sordes.jpg`. Le portrait est intégré dans un sticker lavande, avec ses lunettes, sa coiffure et son sourire. Le nom affiché devient « Jean Z. Sordes », cohérent avec l’identité de la page et le domaine.

Deuxième version : `assets/jean-sordes-partage-v2.png`, 1 730 × 909 px, PNG RGB, environ 1,7 Mo. Ratio proche de 1,91:1. Cette version avec l’ancien portrait est conservée mais n’est plus utilisée par les métadonnées.

Le [prompt complet de l’édition](prompt-visuel-partage-portrait.txt) précise le rôle des deux images et la préservation de l’identité. La première version avait été générée autour du nom, du rôle et de la promesse de Jean sur fond ivoire, avec des stickers pastel et une illustration du passage d’un blocage à un plan clair.

## Photo actuelle fournie par Jean

Jean a ensuite fourni une photo récente et demandé son utilisation sur la page et dans l’image de partage. La photo fournie montre sa chemise bleu clair, son T-shirt blanc, ses lunettes et une expression calme ; elle remplace le portrait plus ancien aux trois emplacements de la page. Le fichier `assets/jean-sordes-actuel.jpg` est une version JPEG de la photo, à ses dimensions originales de 1 092 × 1 441 px, environ 173 Ko. Aucun visage n’a été généré ou retouché pour la page. Le cadrage carré est réalisé par CSS, avec `object-fit: cover` et `object-position: center 75%` pour écarter les bandes de la capture.

Fichier de partage actif : `assets/jean-sordes-partage-v3.png`, 1 730 × 909 px. Il a été édité avec l’outil intégré imagegen, en conservant la composition et les textes, et en utilisant uniquement la photo récente comme référence d’identité. Le [prompt complet](prompt-visuel-partage-portrait-actuel.txt) demande explicitement de conserver l’âge apparent, les traits, les lunettes, la coiffure, la barbe et l’expression, sans rajeunissement ni mélange avec l’ancien portrait. Le résultat est copié dans le dépôt et utilisé par Open Graph et la carte de grande taille. Les anciennes versions sont conservées.
