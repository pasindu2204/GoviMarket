const express = require('express')
const { products } = require('../seed')

const router = express.Router()

router.get('/', (req, res) => {
	res.json(products)
})

router.get('/:productId', (req, res) => {
	const { productId } = req.params
	const product = products.find(
		(item) => String(item.id) === String(productId) || slugify(item.name) === slugify(productId)
	)

	if (!product) {
		return res.status(404).json({ message: 'Product not found.' })
	}

	return res.json(product)
})

function slugify(value) {
	return String(value || '')
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
}

module.exports = router