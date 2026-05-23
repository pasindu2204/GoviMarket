const express = require('express');
const Checkout = require('../models/checkout');
const Cart = require('../models/cart');
const Profile = require('../models/profile');

const router = express.Router();

function toNumber(value) {
	return Number.parseFloat(String(value ?? 0).replace(/[^\d.]/g, '')) || 0;
}

function normalizeItems(items) {
	return items.map((item) => ({
		productId: String(item.productId ?? item.id ?? ''),
		name: String(item.name ?? '').trim(),
		price: toNumber(item.price),
		quantity: Number(item.quantity ?? 1) || 1,
		image: item.image ? String(item.image) : undefined,
	}));
}

function calcSubtotal(items) {
	return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

router.post('/', async (req, res) => {
	try {
		const {
			userId,
			items: rawItems,
			firstName,
			lastName,
			idNumber,
			address,
			town,
			province,
			paymentMethod,
			notes = '',
		} = req.body;

		const customerFields = { firstName, lastName, idNumber, address, town, province, paymentMethod };
		const missingFields = Object.entries(customerFields)
			.filter(([, value]) => !value || !String(value).trim())
			.map(([key]) => key);

		if (missingFields.length > 0) {
			return res.status(400).json({ message: 'Missing required checkout fields.', missingFields });
		}

		let user = null;
		if (userId) {
			user = await Profile.findById(userId).exec();
			if (!user) {
				return res.status(404).json({ message: 'User not found.' });
			}
		}

		let items = Array.isArray(rawItems) ? rawItems : [];
		if (items.length === 0 && user) {
			const cart = await Cart.findOne({ user: user._id }).lean().exec();
			items = cart?.items ?? [];
		}

		if (items.length === 0) {
			return res.status(400).json({ message: 'Checkout requires at least one item.' });
		}

		const normalizedItems = normalizeItems(items).filter((item) => item.productId && item.name);
		if (normalizedItems.length === 0) {
			return res.status(400).json({ message: 'Checkout items are invalid.' });
		}

		const subtotal = calcSubtotal(normalizedItems);
		const checkout = await Checkout.create({
			user: user?._id,
			items: normalizedItems,
			firstName: String(firstName).trim(),
			lastName: String(lastName).trim(),
			idNumber: String(idNumber).trim(),
			address: String(address).trim(),
			town: String(town).trim(),
			province: String(province).trim(),
			paymentMethod: String(paymentMethod).trim(),
			notes: String(notes || '').trim(),
			subtotal,
			total: subtotal,
		});

		if (user) {
			await Cart.findOneAndDelete({ user: user._id }).exec();
		}

		return res.status(201).json({
			message: 'Checkout saved successfully.',
			checkout,
		});
	} catch (error) {
		console.error('Error saving checkout:', error);
		return res.status(500).json({ message: 'Internal server error.' });
	}
});

router.get('/user/:userId', async (req, res) => {
	try {
		const { userId } = req.params;
		const checkouts = await Checkout.find({ user: userId }).sort({ createdAt: -1 }).lean().exec();
		return res.json(checkouts);
	} catch (error) {
		console.error('Error fetching user checkouts:', error);
		return res.status(500).json({ message: 'Internal server error.' });
	}
});

router.get('/:checkoutId', async (req, res) => {
	try {
		const { checkoutId } = req.params;
		const checkout = await Checkout.findById(checkoutId).lean().exec();
		if (!checkout) {
			return res.status(404).json({ message: 'Checkout not found.' });
		}

		return res.json(checkout);
	} catch (error) {
		console.error('Error fetching checkout:', error);
		return res.status(500).json({ message: 'Internal server error.' });
	}
});

module.exports = router;

