const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoute');
const cartRoutes = require('./routes/cartRoute');
const orderRoutes = require('./routes/orderRoute');
const checkoutRoutes = require('./routes/checkoutRoute');

const { handle404, handle500 } = require('./middlewares/errorHandle');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // If you need to handle cookies
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/order', orderRoutes);
app.use('/checkout', checkoutRoutes);

// Error handling middleware
app.use(handle404);
app.use(handle500);

const PORT = process.env.PORT || 2910;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
