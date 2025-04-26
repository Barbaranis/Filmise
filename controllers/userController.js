const bcrypt = require('bcrypt');
const User = require('../models/userModel');


// POST /users – Créer un utilisateur avec mot de passe hashé
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;


    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = {
      name,
      email,
      password: hashedPassword
    };


    User.createUser(newUser, (err, result) => {
      if (err) return res.status(500).json({ message: 'Erreur serveur', err });
      res.status(201).json({ message: 'Utilisateur créé', id: result.insertId });
    });


  } catch (error) {
    res.status(500).json({ message: 'Erreur lors du hashage du mot de passe', error });
  }
};


// GET /users – Tous les utilisateurs
exports.getAllUsers = (req, res) => {
  User.getAllUsers((err, users) => {
    if (err) return res.status(500).json({ message: 'Erreur serveur' });
    res.json(users);
  });
};


// GET /user/:id – Utilisateur par ID
exports.getUserById = (req, res) => {
  User.getUserById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ message: 'Erreur serveur' });
    if (results.length === 0) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.json(results[0]);
  });
};


// PUT /user/:id – Modifier un utilisateur
exports.updateUser = (req, res) => {
  const user = req.body;
  User.updateUser(req.params.id, user, (err) => {
    if (err) return res.status(500).json({ message: 'Erreur serveur' });
    res.json({ message: 'Utilisateur mis à jour' });
  });
};


// DELETE /user/:id – Supprimer un utilisateur
exports.deleteUser = (req, res) => {
  User.deleteUser(req.params.id, (err) => {
    if (err) return res.status(500).json({ message: 'Erreur serveur' });
    res.json({ message: 'Utilisateur supprimé' });
  });
};

