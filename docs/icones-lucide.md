# Icônes Lucide

Les icônes fonctionnelles de la page utilisent un sprite SVG local : `assets/lucide.svg`. Les boutons, liens, symptômes, principes de l’approche et contrôles de FAQ utilisent les mêmes proportions et traits Lucide. Les illustrations et stickers restent des éléments de composition.

Source : [dépôt officiel Lucide](https://github.com/lucide-icons/lucide/tree/70562c1ee1c4fdcf736fe97bc893fb8511927934/icons), commit `70562c1ee1c4fdcf736fe97bc893fb8511927934`. Les tracés sont conservés dans des symboles SVG nommés. La licence complète ISC et les mentions MIT héritées de Feather sont conservées dans `assets/LUCIDE-LICENSE`.

Chaque utilisation fournit `viewBox="0 0 24 24"`, `stroke="currentColor"`, `stroke-width="2"`, extrémités et jonctions arrondies, `aria-hidden="true"` et `focusable="false"`. Les libellés textuels portent le sens des liens et contrôles. Les éléments `details` basculent les icônes plus/minus par CSS, sans JavaScript.

Le sprite est servi avec le site ; aucun CDN, script Lucide ou framework n’est ajouté. Pour ajouter une icône, récupérer son SVG depuis le même instantané officiel, en ajouter le contenu dans un symbole avec son identifiant, puis l’utiliser avec `<use href="assets/lucide.svg#nom">`.
