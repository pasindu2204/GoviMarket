const express = require('express');
const ContactMessage = require('../models/contactus');

const router = express.Router();

router.post('/', async (req, res) => {
	try {
		const { name, email, phone, subject, message } = req.body;

		if (!name || !email || !phone || !subject || !message) {
			return res.status(400).json({ message: 'Name, email, phone, subject, and message are required.' });
		}

		const contactMessage = await ContactMessage.create({
			name: String(name).trim(),
			email: String(email).trim().toLowerCase(),
			phone: String(phone).trim(),
			subject: String(subject).trim(),
			message: String(message).trim(),
		});

		return res.status(201).json({
			message: 'Contact message sent successfully.',
			contactMessage,
		});
	} catch (error) {
		console.error('Error saving contact message:', error);
		return res.status(500).json({ message: 'Internal server error.' });
	}
});

router.get('/', async (req, res) => {
	try {
		const messages = await ContactMessage.find().sort({ createdAt: -1 }).lean().exec();
		return res.json(messages);
	} catch (error) {
		console.error('Error fetching contact messages:', error);
		return res.status(500).json({ message: 'Internal server error.' });
	}
});

router.get('/:contactId', async (req, res) => {
	try {
		const { contactId } = req.params;
		const message = await ContactMessage.findById(contactId).lean().exec();
		if (!message) {
			return res.status(404).json({ message: 'Contact message not found.' });
		}

		return res.json(message);
	} catch (error) {
		console.error('Error fetching contact message:', error);
		return res.status(500).json({ message: 'Internal server error.' });
	}
});

module.exports = router;

