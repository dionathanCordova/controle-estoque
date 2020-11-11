import express from 'express';

const route = express.Router();

route.get('/', (request, response) =>
	response.json({ message: 'Hello controle' }),
);

export default route;
