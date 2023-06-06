import { Router } from "express";
import { ProdutosController } from "../controllers";

const routes = Router();

routes.get('/produtos', ProdutosController.getAllValidation, ProdutosController.getAll);

export { routes };