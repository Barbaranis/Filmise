const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const verifyToken = require('../middlewares/authMiddleware');
const checkMovieOwnershipOrAdmin = require('../middlewares/checkMovieOwnershipOrAdmin');


// Voir tous les films (public)
router.get('/', movieController.getAllMovies);


// Voir un film par ID (public)
router.get('/:id', movieController.getMovieById);


// Créer un film (utilisateur connecté)
router.post('/', verifyToken, movieController.createMovie);


// Modifier un film (créateur ou admin)
router.put('/:id', verifyToken, checkMovieOwnershipOrAdmin, movieController.updateMovie);


// Supprimer un film (créateur ou admin)
router.delete('/:id', verifyToken, checkMovieOwnershipOrAdmin, movieController.deleteMovie);


module.exports = router;

