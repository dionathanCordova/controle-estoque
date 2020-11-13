import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import UserModel from '../models/User';
import CreateUserService from '../services/CreateUserService';
import userView from '../view/userView';

export default class UserController {
	public async index(request: Request, response: Response): Promise<Response> {
		const userRepository = getRepository(UserModel);
		const user = await userRepository.find();

		return response.json(userView.renderMany(user));
	}

	public async crete(request: Request, response: Response): Promise<Response> {
		const { name, email, password } = request.body;

		let createUser;
		const userService = new CreateUserService();

		await userService
			.execute({ name, email, password })
			.then(resp => {
				createUser = { message: 'ok', name, email, password };
			})
			.catch(err => {
				createUser = { message: err.message };
			});

		return response.json(createUser);
	}
}
