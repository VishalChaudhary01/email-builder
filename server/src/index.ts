import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDB } from './config/db';

const app = express();
connectDB();

app.get('/', (req, res) => {
     res.send('Healthy server');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));