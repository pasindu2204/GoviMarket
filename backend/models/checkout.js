const mongoose = require('mongoose');

const checkoutItemSchema = new mongoose.Schema(
	{
		productId: { type: String, required: true },
		name: { type: String, required: true, trim: true },
		price: { type: Number, required: true, min: 0 },
		quantity: { type: Number, required: true, min: 1, default: 1 },
		image: { type: String },
	},
	{ _id: false }
);

const checkoutSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
		items: { type: [checkoutItemSchema], required: true, default: [] },
		firstName: { type: String, required: true, trim: true },
		lastName: { type: String, required: true, trim: true },
		idNumber: { type: String, required: true, trim: true },
		address: { type: String, required: true, trim: true },
		town: { type: String, required: true, trim: true },
		province: { type: String, required: true, trim: true },
		paymentMethod: {
			type: String,
			required: true,
			enum: ['cash', 'visa', 'other'],
		},
		notes: { type: String, trim: true, default: '' },
		subtotal: { type: Number, required: true, min: 0 },
		total: { type: Number, required: true, min: 0 },
		status: {
			type: String,
			enum: ['pending', 'confirmed', 'cancelled'],
			default: 'pending',
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Checkout', checkoutSchema);

