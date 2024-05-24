const express = require('express');
const { Cart, Order, Product, sequelize } = require('../models');
const router = express.Router();

router.post('/:id', async (req, res) => {
    const id = req.params.id;

    const transaction = await sequelize.transaction();
    try {
        const cartItems = await Cart.findAll({
            where: { id },
            include: [Product],
            order: [['id', 'ASC']]
        });

        if (cartItems.length === 0) {
            return res.status(404).json({ 
              code: 404,
              message: 'No cart found' 
            });
        }

        for (const item of cartItems) {
            await Order.create({
                id: item.id,
                userId: item.userId,
                productId: item.productId,
                quantity: item.quantity
            }, { transaction });

            const product = await Product.findByPk(item.productId, { transaction });
            if (product) {
                product.stock -= item.quantity;
                await product.save({ transaction });
            }
        }

        await Cart.destroy({ where: { id } }, { transaction });
        await transaction.commit();

        res.json({ 
          code: 200,
          message: 'Checkout successful' 
        });
    } catch (error) {
        await transaction.rollback();
        res.status(500).json({ 
          code: 500,
          message: error.message 
        });
    }
});

module.exports = router;
