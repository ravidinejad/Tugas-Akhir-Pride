const express = require('express');
const cartController = require('../controllers/cartController');
const validate = require('../middlewares/validate');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', auth.verifyToken, cartController.createCart);
router.get('/', auth.verifyToken, cartController.getAllCarts);
router.get('/:id', auth.verifyToken, cartController.getCart);
router.delete('/:id', auth.verifyToken, cartController.deleteCart);

module.exports = router;