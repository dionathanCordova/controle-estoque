import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import routes from './routes';
import 'express-async-errors';
// 2 import database
import './database';

import errorHandler from './errors/handler';

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(errorHandler);

app.listen(process.env.PORT || 3333, () => {
	console.log('Server runing!');
});
