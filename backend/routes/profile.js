const express = require('express');
const bcrypt = require('bcryptjs');
const Profile = require('../models/profile');

const router = express.Router();



function publicProfile(profile) {
	return {
		id: profile._id,
		fullName: profile.fullName,
		email: profile.email,
		createdAt: profile.createdAt,
		updatedAt: profile.updatedAt,
	};
}



router.post('/register', async (req, res) => {
	try {
		const { fullName, email, password, confirmPassword } = req.body;

		if (!fullName || !email || !password) {
			return res.status(400).json({ message: 'Full name, email, and password are required.' });
		}

		if (confirmPassword && password !== confirmPassword) {
			return res.status(400).json({ message: 'Passwords do not match.' });
		}

		const existingProfile = await Profile.findOne({ email: email.toLowerCase().trim() });

		if (existingProfile) {
			return res.status(409).json({ message: 'An account with this email already exists.' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const profile = await Profile.create({
			fullName: fullName.trim(),
			email: email.trim().toLowerCase(),
			password: hashedPassword,
		});

		return res.status(201).json({
			message: 'Account created successfully.',
			user: publicProfile(profile),
		});
	} catch (error) {
		return res.status(500).json({ message: 'Unable to register account.', error: error.message });
	}
});

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ message: 'Email and password are required.' });
		}

		const profile = await Profile.findOne({ email: email.trim().toLowerCase() });

		if (!profile) {
			return res.status(404).json({ message: 'No account found for this email.' });
		}

		const isPasswordValid = await bcrypt.compare(password, profile.password);

		if (!isPasswordValid) {
			return res.status(401).json({ message: 'Invalid password.' });
		}

		return res.status(200).json({
			message: 'Login successful.',
			user: publicProfile(profile),
		});
	} catch (error) {
		return res.status(500).json({ message: 'Unable to sign in.', error: error.message });
	}
});

module.exports = router;