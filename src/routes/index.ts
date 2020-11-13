import { Router } from 'express';
import produtoRouter from '../modules/Produtos/routes/produto.routes';
import userRoute from '../modules/users/routes/user.routes';

const route = Router();

route.use(userRoute);
route.use(produtoRouter);

export default route;
