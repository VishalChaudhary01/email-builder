import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { connectDB } from './config/db';
import routes from './routes/index.route';
import { storage } from './controllers/index.controller'

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

const upload = multer({ storage });
app.use('/upload', express.static('upload'));

app.use('/api/email', routes);


app.get('/', (req, res) => {
     res.send('Healthy server');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));