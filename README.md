

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



