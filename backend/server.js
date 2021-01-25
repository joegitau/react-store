import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/users.js';
import productRoutes from './routes/products.js';
import orderRoutes from './routes/orders.js';

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
    res.send("Hello API...")
})


const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV
app.listen(PORT, () => console.log(`Server running in ${NODE_ENV} mode on port ${PORT}...`));
