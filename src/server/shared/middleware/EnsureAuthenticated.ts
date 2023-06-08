import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { JWTService } from "../services";

export const EnsureAuthenticated: RequestHandler = async (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization) return res.status(StatusCodes.UNAUTHORIZED).json({
        errors: {
            default: 'Não autenticado'
        }
    });

    const [type, token] = authorization.split(' ');

    if(type !== 'Bearer') return res.status(StatusCodes.UNAUTHORIZED).json({
        errors: {
            default: 'Não autenticado'
        }
    });

    const verifyToken = JWTService.verify(token);

    if(verifyToken === 'INVALID_TOKEN') {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {
                default: 'Não autenticado'
            }
        });
    }else if(verifyToken === 'JWT_SECRET_NOT_FOUND'){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: 'Erro ao verificar o token'
            }
        });
    }
    
    req.headers.userId = verifyToken.uid.toString();

    return next();
}