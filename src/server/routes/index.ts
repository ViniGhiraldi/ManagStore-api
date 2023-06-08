import { Router } from "express";
import { ProdutosController, ProdutosDosUsuariosController, UsuariosController } from "../controllers";

const routes = Router();

//métodos de sign up (cadastrar) - sign in (entrar)
routes.post('/cadastrar', UsuariosController.signUpValidation, UsuariosController.signUp);
routes.post('/entrar', UsuariosController.signInValidation, UsuariosController.signIn);

//métodos dos usuários (precisa de login)
routes.put('/usuarios/:id', UsuariosController.updateByIdValidation, UsuariosController.updateById);
routes.delete('/usuarios/:id', UsuariosController.deleteByIdValidation, UsuariosController.deleteById);

//métodos dos produtos
routes.post('/produtos', ProdutosController.createValidation, ProdutosController.create);
routes.get('/produtos', ProdutosController.getAllValidation, ProdutosController.getAll);
routes.get('/produtos/:id', ProdutosController.getByIdValidation, ProdutosController.getById);
routes.put('/produtos/:id', ProdutosController.updateByIdValidation, ProdutosController.updateById);
routes.delete('/produtos/:id', ProdutosController.deleteByIdValidation, ProdutosController.deleteById);

//métodos de controle do usuário e seus produtos
routes.post('/produtos-usuarios', ProdutosDosUsuariosController.createValidation, ProdutosDosUsuariosController.create);
routes.get('/produtos-usuarios/:user_id', ProdutosDosUsuariosController.getAllByUserIdValidation, ProdutosDosUsuariosController.getAllByUserId);
routes.get('/produtos-usuarios/:user_id/:produto_id', ProdutosDosUsuariosController.getByIdValidation, ProdutosDosUsuariosController.getById);
routes.delete('/produtos-usuarios/:user_id/:produto_id', ProdutosDosUsuariosController.deleteByIdValidation, ProdutosDosUsuariosController.deleteById);

export { routes };