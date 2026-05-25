const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product');
const profileRoutes = require('./routes/profile');
const cartRoutes = require('./routes/cart');
const checkoutRoutes = require('./routes/checkout');
const contactUsRoutes = require('./routes/contactus');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});


// routes
app.use('/api/products', productRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/contact-us', contactUsRoutes);


const MONGO_URI = process.env.MONGO_URI;

// MongoDB connection events
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB runtime error:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.warn('MongoDB disconnected');
});

// // Start server only when running locally
// if (require.main === module) {
//   app.listen(PORT, () => {
//     console.log(`Backend running on port ${PORT}`);
//   });
// }

// MongoDB connect function
async function connectMongoWithRetry() {
  if (!MONGO_URI) {
    console.error('MONGO_URI is missing. Add it to backend/.env');
    return;
  }

  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
  } catch (err) {
    console.error('MongoDB connection error:', err.message || err);

    // Retry after 5 seconds
    setTimeout(connectMongoWithRetry, 5000);
  }
}

connectMongoWithRetry();

module.exports = app;