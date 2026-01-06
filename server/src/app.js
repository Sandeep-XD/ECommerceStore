import express from 'express';

import router from './routes/user.routes.js';
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the E-Commerce Store API');
});

app.use(express.json());
app.use('/user', router);

export default app;