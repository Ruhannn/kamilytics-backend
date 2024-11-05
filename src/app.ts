import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';


import { config } from 'dotenv';
import { errorHandler, notFound } from './middlewares';
import router from './api';




config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('i love ayaka 😊');
});


app.use('/api', router);

app.use(notFound);
app.use(errorHandler);
export default app;
