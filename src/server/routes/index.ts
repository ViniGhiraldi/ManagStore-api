import { Router } from "express";
import { ProdutosController, ProdutosDosUsuariosController, UsuariosController } from "../controllers";
import { EnsureAuthenticated } from "../shared/middleware";

const routes = Router();

//métodos de sign up (cadastrar) - sign in (entrar)
routes.post('/cadastrar', UsuariosController.signUpValidation, UsuariosController.signUp);
routes.post('/entrar', UsuariosController.signInValidation, UsuariosController.signIn);
routes.post('/refresh-token', UsuariosController.reSignInValidation, UsuariosController.reSignIn);

//métodos dos usuários (precisa de login)
routes.put('/usuarios', EnsureAuthenticated, UsuariosController.updateByIdValidation, UsuariosController.updateById);
routes.delete('/usuarios', EnsureAuthenticated, UsuariosController.deleteById);

//métodos dos produtos
routes.post('/produtos', EnsureAuthenticated, ProdutosController.createValidation, ProdutosController.create);
routes.get('/produtos', ProdutosController.getAllValidation, ProdutosController.getAll);
routes.get('/produtos/:id', ProdutosController.getByIdValidation, ProdutosController.getById);
routes.put('/produtos/:id', EnsureAuthenticated, ProdutosController.updateByIdValidation, ProdutosController.updateById);
routes.delete('/produtos/:id', EnsureAuthenticated, ProdutosController.deleteByIdValidation, ProdutosController.deleteById);

//métodos de controle do usuário e seus produtos
routes.post('/produtos-usuarios', EnsureAuthenticated, ProdutosDosUsuariosController.createValidation, ProdutosDosUsuariosController.create);
routes.get('/produtos-usuarios', EnsureAuthenticated, ProdutosDosUsuariosController.getAllValidation, ProdutosDosUsuariosController.getAll);
routes.get('/produtos-usuarios/:produto_id', EnsureAuthenticated, ProdutosDosUsuariosController.getByIdValidation, ProdutosDosUsuariosController.getById);
routes.delete('/produtos-usuarios/:produto_id', EnsureAuthenticated, ProdutosDosUsuariosController.deleteByIdValidation, ProdutosDosUsuariosController.deleteById);

export { routes };