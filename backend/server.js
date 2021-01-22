import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';

const app = express();
dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello API...")
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.get('/api/products', (req, res) => {
    res.status(200).json(products)
})

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV
app.listen(PORT, () => console.log(`Server running in ${NODE_ENV} mode on port ${PORT}...`))