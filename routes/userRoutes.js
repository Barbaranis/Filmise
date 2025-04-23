const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/isAdmin');
const checkOwnershipOrAdmin = require('../middlewares/checkOwnershipOrAdmin'); // nouveau


// Créer un utilisateur (public)
router.post('/', userController.createUser);


// Récupérer tous les utilisateurs (admin uniquement)
router.get('/', verifyToken, isAdmin, userController.getAllUsers);


// Récupérer un utilisateur par ID (connecté ou admin)
router.get('/:id', verifyToken, checkOwnershipOrAdmin, userController.getUserById);


// Modifier un utilisateur (connecté ou admin)
router.put('/:id', verifyToken, checkOwnershipOrAdmin, userController.updateUser);


// Supprimer un utilisateur (admin uniquement)
router.delete('/:id', verifyToken, isAdmin, userController.deleteUser);


module.exports = router;

