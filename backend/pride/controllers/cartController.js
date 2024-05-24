const { Cart, User, Product } = require('../models');
const validate = require('../middlewares/validate');

module.exports = {
  async createCart(req, res) {
    const { id, userId, productId, quantity } = req.body;
    try {
      const cart = await Cart.create({ id, userId, productId, quantity });
      res.status(201).json(cart);
    } catch (error) {
      res.status(400).json({ 
        code: 400,
        message: error.message 
      });
    }
  },

  async getAllCarts(req, res) {
    try {
      const carts = await Cart.findAll();
      res.json(carts);
    } catch (error) {
      res.status(400).json({ 
        code: 400,
        message: error.message 
      });
    }
  },

  async getCart(req, res) {
    try {
      const cart = await Cart.findAll({ where: { id: req.params.id} });
      if (!cart) return res.status(404).json({ 
        code: 404,
        message: 'Cart not found' 
      });
      res.json(cart);
    } catch (error) {
      res.status(400).json({ 
        code: 400,
        message: error.message 
      });
    }
  },

  async deleteCart(req, res) {
    try {
      const cart = await Cart.findByPk(req.params.id);
      if (!cart) return res.status(404).json({ 
        code: 404,
        message: 'Cart not found' 
      });

      await cart.destroy();
      res.status(200).json({
        code: 200,
        message: 'Cart data deleted' 
      });
    } catch (error) {
      res.status(400).json({ 
        code: 400,
        message: error.message 
      });
    }
  }
};
