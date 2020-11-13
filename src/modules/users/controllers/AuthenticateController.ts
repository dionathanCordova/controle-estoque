import { Request, Response } from 'express';
import AuthService from '../services/AuthService';

export default class AuthenticateController {
	public async auth(request: Request, response: Response): Promise<Response> {
		try {
			const { email, password } = request.body;

			const authService = new AuthService();

			const signin = await authService.execute(email, password);

			return response.json(signin);
		} catch (error) {
			return response.json({ message: error.message });
		}
	}
}
