const express = require('express');
const orderController = require('../controllers/orderController');
const validate = require('../middlewares/validate');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', auth.verifyToken, orderController.createOrder);
router.get('/', auth.verifyToken, orderController.getAllOrders);
router.get('/:id', auth.verifyToken, orderController.getOrder);
router.delete('/:id', auth.verifyToken, auth.isAdmin, orderController.deleteOrder);

module.exports = router;
