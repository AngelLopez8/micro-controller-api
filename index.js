import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import unitRoutes from './routes/unit.js';

dotenv.config();
const app = express();

app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/units', unitRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to Micro-Controller API");
});

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => {
        app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
    })
    .catch( error => console.log(`Failed to connect to Port: ${PORT}`));

mongoose.set('useFindAndModify', false);