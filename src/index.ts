import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import { AppRouter } from './routes/index.js';
import { config } from './config.js';

dotenv.config();

mongoose.Promise = global.Promise;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(
    express.urlencoded({
      extended: true,
    })
);

app.use(AppRouter);

mongoose.connect(config.mongoDBUrl);

mongoose.connection.on('error', (error: Error) => {
    console.log('Error occoured while connecting to the DB', error);
});

mongoose.connection.on('connected', () => {
    console.log('connected to DB.....');
    app.listen(config.port, () => {
        console.log(`[Server]: Server started on port: ${config.port}`);
    });
});