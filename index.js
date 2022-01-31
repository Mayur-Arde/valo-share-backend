import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import errorHandler from './middleware/error-handler.js';
import routeNotFound from './middleware/route-not-found.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('hello valo-share app');
});

app.use(routeNotFound);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} `);
});
