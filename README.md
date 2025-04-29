<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======


# 🎬 Filmise – Plateforme de gestion de films/séries

Bienvenue sur **Filmise**, une API REST sécurisée construite avec **Node.js**, **Express.js** et **MySQL**.  
Ce projet permet de gérer une plateforme de type **Netflix**, avec utilisateurs, authentification, rôles, et gestion de films/séries.

---

## 🚀 Fonctionnalités

### Utilisateurs

| Méthode | Route               | Accès                | Description                      |
|---------|---------------------|----------------------|----------------------------------|
| POST    | `/api/users`        | Public               | Créer un utilisateur             |
| GET     | `/api/users`        | Admin                | Obtenir tous les utilisateurs    |
| GET     | `/api/users/:id`    | Connecté ou Admin    | Obtenir un utilisateur par ID    |
| PUT     | `/api/users/:id`    | Connecté ou Admin    | Modifier un utilisateur          |
| DELETE  | `/api/users/:id`    | Admin                | Supprimer un utilisateur         |

### Authentification

| Méthode | Route         | Accès  | Description                      |
|---------|---------------|--------|----------------------------------|
| POST    | `/api/login`  | Public | Se connecter + recevoir un JWT   |

### Films / Séries


| Méthode | Route                | Accès                 | Description                        |
|---------|----------------------|------------------------|------------------------------------|
| GET     | `/api/movies`        | Public                 | Voir tous les films/séries         |
| GET     | `/api/movies/:id`    | Public                 | Voir un film/série par ID          |
| POST    | `/api/movies`        | Connecté               | Ajouter un film/série              |
| PUT     | `/api/movies/:id`    | Créateur ou Admin      | Modifier un film/série             |
| DELETE  | `/api/movies/:id`    | Créateur ou Admin      | Supprimer un film/série            |

---

## 🔐 Sécurité

- **JWT** : Authentification par token
- **Bcrypt** : Hachage sécurisé des mots de passe
- **.env** : Données sensibles protégées
- **Rôles** : Admin vs Utilisateur standard
- **Middleware** : Protection des routes

---

## 🗂️ Structure MVC
filmise/
├── controllers/
│   └── userController.js
│   └── movieController.js
├── models/
│   └── userModel.js
│   └── movieModel.js
├── middlewares/
│   └── authMiddleware.js
│   └── isAdmin.js
├── routes/
│   └── userRoutes.js
│   └── movieRoutes.js
├── .env
├── server.js
---

## ⚙️ Installation & Lancement

```bash
git clone https://github.com/ton-pseudo/filmise.git
cd filmise
npm install
npm run dev
Créer un fichier .env :
DB_HOST=localhost
DB_PORT=8848
DB_USER=root
DB_PASSWORD=root
DB_NAME=films-series
JWT_SECRET=maCleSecrete235
PORT=5006

🧠 Technologies utilisées
Node.js


Express.js


MySQL


JWT


Bcrypt


Dotenv


Thunder Client (test API)



📸 Aperçu visuel (bonus si front + capture)
Ajoute ici une capture d’écran si tu fais aussi un front React plus tard !

✅ Objectifs du projet
Respect des conventions REST


Authentification sécurisée


Séparation claire Model / Controller / Route


Bonnes pratiques Git & GitHub



🧑‍💻 Réalisé par
Projet solo API REST – Barbara A. – Avril 2025



>>>>>>> 26a367be5410478b640e3c36e8bcf58e1840cf39
