import { Request, Response } from 'express';

export default class ProdutoController {
	public async index(request: Request, response: Response): Promise<Response> {
		return response.json({ message: 'produto controller' });
	}
}
