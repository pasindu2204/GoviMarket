const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    price: { type: String, required: true, trim: true },
    originalPrice: { type: String, trim: true },
    image: { type: String, trim: true },
    rating: { type: Number, min: 0, max: 5 },
    reviews: { type: Number, min: 0, default: 0 },
    badge: { type: String, trim: true, default: '' },
    unit: { type: String, trim: true, default: '' },
    location: { type: String, trim: true, default: '' },
    farmName: { type: String, trim: true, default: '' },
    tags: { type: [String], default: [] },
    stock: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);