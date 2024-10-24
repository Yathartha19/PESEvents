import express from 'express';
import connectDB from './config/db.js';
import path from 'path';
import dotenv from 'dotenv';
import routes from './routes/routes.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json());

app.use('/backend/api/', routes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
