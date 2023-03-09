import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import neuralRoutes from './routes/neuralRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use('/api/V1/post', postRoutes);
app.use('/api/V1/neural', neuralRoutes);
app.get('/', async (req, res) => {
    res.send('Hello from Dall-E!');
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
    } catch (error) {
        console.log(error);
    }


    
}

startServer();