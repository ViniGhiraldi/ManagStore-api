import { Router } from "express";
import { ProdutosController, ProdutosDosUsuariosController } from "../controllers";

const routes = Router();

routes.get('/produtos', ProdutosController.getAllValidation, ProdutosController.getAll);
routes.get('/produtos/:id', ProdutosController.getByIdValidation, ProdutosController.getById);

routes.get('/produtos-usuarios', ProdutosDosUsuariosController.getAllValidation, ProdutosDosUsuariosController.getAll);
routes.post('/produtos-usuarios', ProdutosDosUsuariosController.createValidation, ProdutosDosUsuariosController.create);
routes.delete('/produtos-usuarios', ProdutosDosUsuariosController.deleteByIdValidation, ProdutosDosUsuariosController.deleteById);

export { routes };