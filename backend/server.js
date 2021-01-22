const express = require('express');
const app = express();

const products = require('./data/products');

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

const PORT = process.env.PORT = 5000;
app.listen(PORT, () => console.log('Listening on port ' + PORT))