// backend/middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // "Bearer <token>"


  if (!token) {
    return res.status(401).json({ message: 'Accès refusé, token manquant' });
  }


  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // infos dispo dans les routes protégées
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token invalide ou expiré' });
  }
};


module.exports = verifyToken;

