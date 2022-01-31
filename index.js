import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import errorHandler from './middleware/error-handler.js';
import routeNotFound from './middleware/route-not-found.js';

import connectToDatabase from './db/db-connection.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('hello valo-share app');
});

connectToDatabase();

app.use(routeNotFound);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} `);
});
