const { Order, User, Product } = require('../models');
const validate = require('../middlewares/validate');

module.exports = {
  async createOrder(req, res) {
    const { id, userId, productId, quantity } = req.body;
    try {
      const order = await Order.create({ id, userId, productId, quantity });
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ 
        code: 400,
        message: error.message 
      });
    }
  },

  async getAllOrders(req, res) {
    try {
      const orders = await Order.findAll();
      res.json(orders);
    } catch (error) {
      res.status(400).json({ 
        code: 400,
        message: error.message 
      });
    }
  },

  async getOrder(req, res) {
    try {
      const order = await Order.findAll({ where: { id: req.params.id} });
      if (!order) return res.status(404).json({ 
        code: 404,
        message: 'Order not found' 
      });
      res.json(order);
    } catch (error) {
      res.status(400).json({ 
        code: 400,
        message: error.message 
      });
    }
  },

  async deleteOrder(req, res) {
    try {
      const order = await Order.findByPk(req.params.id);
      if (!order) return res.status(404).json({ 
        code: 404,
        message: 'Cart not found' 
      });

      await order.destroy();
      res.status(200).json({
        code: 200,
        message: 'Order data deleted' 
      });
    } catch (error) {
      res.status(400).json({ 
        code: 400,
        message: error.message 
      });
    }
  }
};
