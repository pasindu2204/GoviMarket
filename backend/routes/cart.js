const express = require('express');
const Cart = require('../models/cart');
const Profile = require('../models/profile');

const router = express.Router();

// Save or replace cart for a user
// body: { userId: string, items: [{ productId, name, price, quantity, image }] }
router.post('/', async (req, res) => {
  try {
    const { userId, items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Items array is required.' });
    }

    let user = null;
    if (userId) {
      user = await Profile.findById(userId).exec();
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
    }

    const query = user ? { user: user._id } : { _id: null };

    // If user provided, upsert by user, otherwise create a new cart document
    let cart;
    if (user) {
      cart = await Cart.findOneAndUpdate({ user: user._id }, { items }, { new: true, upsert: true, setDefaultsOnInsert: true });
    } else {
      cart = new Cart({ items });
      await cart.save();
    }

    return res.json(cart);
  } catch (err) {
    console.error('Error saving cart:', err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

// Get cart for a user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ user: userId }).lean().exec();
    if (!cart) return res.status(404).json({ message: 'Cart not found.' });
    return res.json(cart);
  } catch (err) {
    console.error('Error fetching cart:', err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

// Clear cart for user
router.delete('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const removed = await Cart.findOneAndRemove({ user: userId }).exec();
    if (!removed) return res.status(404).json({ message: 'Cart not found.' });
    return res.json({ message: 'Cart cleared.' });
  } catch (err) {
    console.error('Error clearing cart:', err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = router;
