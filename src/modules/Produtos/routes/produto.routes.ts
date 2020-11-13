import { Router } from 'express';
import ProdutoController from '../controllers/ProdutoController';

const produtoRouter = Router();

const produtoController = new ProdutoController();

produtoRouter.get('/products', produtoController.index);

export default produtoRouter;
