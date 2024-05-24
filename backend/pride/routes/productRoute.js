const express = require('express');
const productController = require('../controllers/productController');
const validate = require('../middlewares/validate');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', auth.verifyToken, auth.isAdmin, productController.upload.single('image'), validate.product, productController.createProduct);
router.get('/', auth.verifyToken, productController.getAllProducts);
router.get('/:id', auth.verifyToken, productController.getProduct);
router.patch('/:id', auth.verifyToken, auth.isAdmin, productController.upload.single('image'), productController.updateProduct);
router.delete('/:id', auth.verifyToken, auth.isAdmin, productController.deleteProduct);

module.exports = router;
