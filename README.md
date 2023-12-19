# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# Kill the divs

## Objectifs

Utilisez des API Web pour se rapprocher de l'expérience d'une application native (desktop ou mobile)

## Le jeu

On aura un premier écran avec un bouton "Start" qui permettra de lancer le jeu.
En cliquant dessus, on aura un écran avec des divs qui apparaissent à des positions aléatoires sur l'écran.
Le but du jeu est de cliquer sur ces divs pour les faire disparaître.
On en fera apparaître de nouveaux à chaque fois qu'on en fait disparaître un.
La partie se termine quand on a cliqué sur 10 divs.
On affichera alors un écran de fin de partie avec un bouton "Rejouer" qui permettra de relancer une partie et le temps qu'on a mis pour finir la partie.

## Les étapes

### 1. Jeu de base

1. Ajouter un routing avec 3 routes : "/" pour l'écran d'accueil, "/game" pour l'écran de jeu et "/end" pour l'écran de fin de partie
2. Créer un bouton "Start" dans la page d'accueil, qui amène à l'écran de jeu
3. Dans l'écran de jeu, on affiche une div ronde (Boite de 50px de côté, bordure arrondie, fond blanc) à une position aléatoire sur l'écran
4. l'écran de jeu prend 100% de la hauteur et de la largeur de l'écran
5. on affiche un compteur de divs cliquées en haut à droite de l'écran
6. en dessous de ce compteur, on affiche un chrono croissant en secondes ex: 6.867 sec
7. l'écran de jeu a un fond noir
8. lorsque l'on clique sur la div, elle disparait et on en fait apparaitre une nouvelle à une position aléatoire
9. quand on a cliqué sur 10 divs, on affiche un écran de fin de partie avec un bouton "Rejouer" qui permet de relancer une partie et le temps qu'on a mis pour finir la partie

### 2. Pimp my game

Choisissez des améliorations à apporter au jeu dans l'order que vous voulez :

- Ajouter un son quand on clique sur une div (Utiliser l'API Web Audio)
- Ajouter des vibrations quand on clique sur une div (Utiliser l'API Vibration)
- Ajouter une notification quand on clique sur la dernière div avec affichage du temps total (Utiliser l'API Notification)
- Ajouter un bouton "Pause" qui met le jeu en pause (Utiliser l'API Page Visibility)
- Utiliser l'api suivante et la geolocalisation pour afficher le pays de l'utilisateur :
https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=37.42159&longitude=-122.0837&localityLanguage=en
- stocker les meilleurs scores dans le local storage et les afficher dans l'écran de fin de partie
- Ajouter un bouton "Fullscreen" qui permet de mettre le jeu en plein écran (Utiliser l'API Fullscreen)
- Ajouter un bouton "Share" qui permet de partager le jeu sur les réseaux sociaux (Utiliser l'API Share)
- Ajouter un bouton "Install" qui permet d'installer le jeu sans passer par la barre URL