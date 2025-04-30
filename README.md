# Filmise – Projet Solo API REST


**Filmise** est une application web complète inspirée de Netflix, développée dans le cadre d’un projet solo. Elle permet de consulter des films/séries, de s’inscrire, se connecter, laisser des avis, et gérer les contenus via une interface admin. Le tout avec une API REST sécurisée.


## Démo
> Lancement local via Docker : voir la section "Installation"


---


## Stack Technique


- **Frontend** : React.js, Axios, CSS Modules
- **Backend** : Node.js, Express.js, MySQL
- **Authentification** : JWT, Bcrypt
- **Sécurité** : Helmet, CORS, Requêtes SQL paramétrées
- **Tests API** : Postman
- **Conteneurisation** : Docker & Docker Compose


---


## Fonctionnalités principales


- Authentification sécurisée (JWT + Bcrypt)
- CRUD : Utilisateurs, Films, Avis
- Système de rôles (admin / utilisateur)
- Page Profil avec gestion des avis
- Page Admin (modification / suppression)
- Carrousel dynamique façon Netflix
- Design responsive


---


## Architecture du projet
filmise/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   └── Dockerfile
├── docker-compose.yml
└── README.md
Modèle **MVC** côté backend : séparation claire entre routes, contrôleurs et modèles.


---


## Installation (Docker)


1. **Cloner le repo** :
```bash
git clone https://github.com/<votre-nom>/filmise.git
cd filmise
Lancer l’application :


docker-compose up --build
Accéder à l’app :


Frontend : http://localhost:3001


Backend API : http://localhost:5000



Modèle Merise utilisé
Modèle Conceptuel (MCD) avec entités : Utilisateur, Film, Avis


Modèle Logique (MLD) transformé en tables SQL (clé primaire, étrangère)


Relations :


Un utilisateur peut laisser plusieurs avis


Un avis appartient à un seul film



Auteur
Anis Barbara
Projet réalisé en autonomie dans le cadre de la formation développement web.

License
Ce projet est sous licence MIT.
---






