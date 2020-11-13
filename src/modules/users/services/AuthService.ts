import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import UserModel from '../models/User';
import userView from '../view/userView';

export default class AuthService {
	public async execute(email: string, password: string): Promise<any> {
		try {
			const userRepository = getRepository(UserModel);

			const userEmail = await userRepository.findOne({ where: { email } });

			if (!userEmail) {
				throw new Error('User not found');
			}

			const comparePass = await compare(password, userEmail.password);

			if (!comparePass) {
				throw new Error('Credential not match');
			}

			const accessToken = process.env.JWT_ACCESS_TOKEN_SECRET;

			const token = sign({}, `${accessToken}`, {
				subject: userEmail.id,
				expiresIn: '1d',
			});

			return { user: userView.render(userEmail), token, status: 'ok' };
		} catch (error) {
			return { status: 'error', message: error.message };
		}
	}
}
