import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
import routes from './routes/index.route';

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/email', routes);

app.get('/', (req, res) => {
     res.send('Healthy server');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));