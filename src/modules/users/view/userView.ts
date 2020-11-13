import UserModel from '../models/User';

export default {
	render(user: UserModel) {
		return {
			id: user.id,
			name: user.name,
			emai: user.email,
			isAdmin: user.isAdmin,
		};
	},

	renderMany(user: UserModel[]) {
		return user.map(usr => this.render(usr));
	},
};
