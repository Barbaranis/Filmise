const db = require('../models/db');


// Créer un utilisateur
exports.createUser = (user, callback) => {
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [user.name, user.email, user.password], callback);
};


// Récupérer tous les utilisateurs
exports.getAllUsers = callback => {
  db.query('SELECT * FROM users', callback);
};


// Récupérer un utilisateur par ID
exports.getUserById = (id, callback) => {
  db.query('SELECT * FROM users WHERE id = ?', [id], callback);
};


// Mettre à jour un utilisateur
exports.updateUser = (id, user, callback) => {
  const sql = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
  db.query(sql, [user.name, user.email, user.password, id], callback);
};


// Supprimer un utilisateur
exports.deleteUser = (id, callback) => {
  db.query('DELETE FROM users WHERE id = ?', [id], callback);
};
