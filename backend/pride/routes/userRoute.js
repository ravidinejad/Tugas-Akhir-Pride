const express = require('express');
const userController = require('../controllers/userController');
const validate = require('../middlewares/validate');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', validate.user, userController.createUser);
router.get('/', auth.verifyToken, userController.getAllUsers);
router.get('/:id', auth.verifyToken, userController.getUser);
router.patch('/:id', auth.verifyToken, auth.isAdmin, userController.updateUser);
router.delete('/:id', auth.verifyToken, auth.isAdmin, userController.deleteUser);
router.post('/login', userController.login);
router.post('/register', validate.register, userController.registerUser); // Menggunakan validate.register

module.exports = router;
