const db = require('../models/db');


const checkMovieOwnershipOrAdmin = (req, res, next) => {
  const movieId = req.params.id;
  const userId = req.user.id;
  const userRole = req.user.role;


  const sql = 'SELECT createdBy FROM movies WHERE id = ?';


  db.query(sql, [movieId], (err, results) => {
	if (err) return res.status(500).json({ message: 'Erreur serveur', err });


	if (results.length === 0) {
  	return res.status(404).json({ message: 'Film non trouvé' });
	}


	const isOwner = results[0].createdBy === userId;
	const isAdmin = userRole === 'admin';


	if (isOwner || isAdmin) {
  	return next();
	}


	return res.status(403).json({ message: 'Accès interdit : non autorisé' });
  });
};


module.exports = checkMovieOwnershipOrAdmin;

