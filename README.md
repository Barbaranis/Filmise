

📽️Filmise🎬
 – API REST (Node.js, Express, MySQL)
Présentation
Filmise est une plateforme type Netflix développée dans le cadre d’un projet solo. Elle permet aux utilisateurs de s’inscrire, se connecter, consulter et gérer une liste de films et séries.
L’API est conçue avec Node.js, Express.js et MySQL, et suit une architecture MVC claire.
Elle intègre une sécurité robuste via JWT, le hachage des mots de passe, la vérification des rôles (admin), et la protection des routes.

Technologies utilisées
Node.js


Express.js


MySQL


bcrypt


jsonwebtoken


dotenv


Postman / Thunder Client pour les tests


React.js (à venir pour le frontend)



Structure du projet (MVC)
filmise/
├── controllers/
│   ├── authController.js
│   └── userController.js
├── middlewares/
│   ├── authMiddleware.js
│   ├── isAdmin.js
│   └── checkMovieOwner.js
├── models/
│   ├── db.js
│   ├── userModel.js
│   └── movieModel.js
├── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   └── movieRoutes.js
├── .env
├── server.js
└── README.md

Fonctionnalités principales
Utilisateurs
Route               
Méthode
Accès            
Description
/api/users       
POST   
Public            
Créer un utilisateur
/api/users       
GET    
Admin             
Récupérer tous les utilisateurs
/api/users/:id   
GET    
Connecté / Admin  
Récupérer un utilisateur
/api/users/:id   
PUT    
Connecté / Admin  
Modifier un utilisateur
/api/users/:id   
DELETE 
Admin             
Supprimer un utilisateur

Authentification
Route               
Méthode
Accès
Description
/api/login
POST   
Public
Connexion + génération d’un token JWT

Films / Séries
Route               
Méthode
Accès            
Description
/api/movies      
GET    
Public            
Liste de tous les films/séries
/api/movies/:id  
GET    
Public            
Détails d’un film
/api/movies      
POST   
Utilisateur connecté
Ajouter un film
/api/movies/:id  
PUT    
Créateur / Admin  
Modifier un film
/api/movies/:id  
DELETE 
Créateur / Admin  
Supprimer un film


Sécurité
Authentification via JWT


Hashage de mot de passe avec bcrypt


Vérification de rôle (admin)


Vérification du propriétaire d’un film


Variables sensibles dans .env


Middleware de vérification de token



.env exemple
DB_HOST=localhost
DB_PORT=2382
DB_USER=root
DB_PASSWORD=root
DB_NAME=films-series
PORT=5000
JWT_SECRET=maCleSecrete24

Installation & Lancement
Cloner le dépôt :


git clone https://github.com/votre-utilisateur/filmise.git
cd filmise
Installer les dépendances :


npm install
Configurer le fichier .env à la racine.


Démarrer le serveur :


npm start

Base de données MySQL
Exemple de table users :
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('user', 'admin') DEFAULT 'user',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Exemple de table movies :
CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  type VARCHAR(50),
  year INT,
  createdBy INT,
  FOREIGN KEY (createdBy) REFERENCES users(id) ON DELETE CASCADE
);

Statut du projet
Backend terminé (CRUD, sécurité, JWT)


Tests API (Thunder Client / Postman)


Frontend React (à venir)


Déploiement (optionnel)



Auteur
Projet réalisé par Barbara Anis – 2025
Dans le cadre du projet solo API REST (Encadré par Asssofac montreuil)


