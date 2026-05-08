const express = require('express')
const cors = require('cors')
const { products } = require('./seed')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`)
})
