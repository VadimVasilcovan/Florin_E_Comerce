import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Car } from "./models/carModel.js";
import carsRoute from './carsRoute.js';
import cors from 'cors';

const app = express();



// Enable CORS only for the specific frontend origin (localhost:5173)
app.use(cors({
    origin: 'http://localhost:5173', // Allow only this origin to access the API
}));

// Increase request body size limits to handle large payloads
app.use(express.json({ limit: '50mb' })); // Set body size limit for JSON
app.use(express.urlencoded({ limit: '50mb', extended: true })); // Set body size limit for URL-encoded form data

// Simple test route
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To Site');
});

// Route handling for /cars endpoint
app.use('/cars', carsRoute);

// Connect to MongoDB and start server
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to the database:', error);
    });

