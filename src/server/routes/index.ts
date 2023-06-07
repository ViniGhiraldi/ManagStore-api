import { Router } from "express";
import { ProdutosController, ProdutosDosUsuariosController } from "../controllers";

const routes = Router();

routes.post('/produtos', ProdutosController.createValidation, ProdutosController.create);
routes.get('/produtos', ProdutosController.getAllValidation, ProdutosController.getAll);
routes.get('/produtos/:id', ProdutosController.getByIdValidation, ProdutosController.getById);
routes.put('/produtos/:id', ProdutosController.updateByIdValidation, ProdutosController.updateById);
routes.delete('/produtos/:id', ProdutosController.deleteByIdValidation, ProdutosController.deleteById);

routes.post('/produtos-usuarios', ProdutosDosUsuariosController.createValidation, ProdutosDosUsuariosController.create);
routes.get('/produtos-usuarios', ProdutosDosUsuariosController.getAllValidation, ProdutosDosUsuariosController.getAll);
routes.delete('/produtos-usuarios', ProdutosDosUsuariosController.deleteByIdValidation, ProdutosDosUsuariosController.deleteById);

export { routes };