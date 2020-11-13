import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '../dto/ICreateUserDTO';
import IUserRepository from '../interfaces/IUserRepository';
import UserModel from '../models/User';

class UserRepository implements IUserRepository {
	private ormRepo: Repository<UserModel>;

	constructor() {
		this.ormRepo = getRepository(UserModel);
	}

	public async create({
		email,
		name,
		password,
	}: ICreateUserDTO): Promise<UserModel> {
		const user = this.ormRepo.create({
			name,
			email,
			password,
		});

		return user;
	}

	public async findAllUsers(): Promise<UserModel[]> {
		const users = await this.ormRepo.find();

		return users;
	}

	public async findById(id: string): Promise<UserModel | undefined> {
		const user = await this.ormRepo.findOne(id);

		return user;
	}

	public async fintByEmail(email: string): Promise<UserModel | undefined> {
		const user = await this.ormRepo.findOne({ where: { email } });
		return user;
	}

	public async save(user: UserModel): Promise<UserModel> {
		return this.ormRepo.save(user);
	}
}

export default UserRepository;
