import { Router } from 'express';
import AuthenticateController from '../controllers/AuthenticateController';
import UserController from '../controllers/UserController';

const userController = new UserController();
const authController = new AuthenticateController();

const userRoute = Router();

userRoute.get('/users', userController.index);
userRoute.post('/create', userController.crete);
userRoute.post('/auth', authController.auth);

export default userRoute;
