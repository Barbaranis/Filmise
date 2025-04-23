const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../models/db');


exports.loginUser = (req, res) => {
  const { email, password } = req.body;


  // Vérifie si les champs sont remplis
  if (!email || !password) {
    return res.status(400).json({ message: 'Email et mot de passe requis' });
  }


  // Cherche l'utilisateur dans la base
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Erreur serveur', err });


    if (results.length === 0) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }


    const user = results[0];


    // Vérifie le mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }


    // Crée un token
    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        role: user.role // bonus : si tu gères les rôles
      },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );


    res.status(200).json({
      message: 'Connexion réussie',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  });
};

