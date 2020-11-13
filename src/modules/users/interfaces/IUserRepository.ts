import User from '../models/User';

import ICreateUserDTO from '../dto/ICreateUserDTO';

export default interface IUserRepository {
	findAllUsers(): Promise<User[]>;
	findById(id: string): Promise<User | undefined>;
	fintByEmail(email: string): Promise<User | undefined>;
	create(data: ICreateUserDTO): Promise<User>;
	save(user: User): Promise<User>;
}
