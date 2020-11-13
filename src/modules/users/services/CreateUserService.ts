import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import ICreateUserDTO from '../dto/ICreateUserDTO';
import User from '../models/User';

export default class CreateUserService {
	public async execute({
		email,
		name,
		password,
	}: ICreateUserDTO): Promise<User> {
		const userRepository = getRepository(User);

		const findEmailAreadUsed = await userRepository.findOne({
			where: { email },
		});

		if (findEmailAreadUsed) {
			throw new Error('Email already in use');
		}

		const hashPassoword = await hash(password, 8);
		const user = await userRepository.save({
			name,
			email,
			password: hashPassoword,
		});
		return user;
	}
}
