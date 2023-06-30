import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { JWTService } from "../../shared/services";
import { UsuariosProvider } from "../../database/providers";

const validationBody = z.object({
    refreshToken: z.string()
})

export const reSignInValidation = Validation([
    {
        path: 'body',
        schema: validationBody
    }
])

type TBodyProps = z.infer<typeof validationBody>;

export const reSignIn = async (req:Request<{}, {}, TBodyProps>, res:Response) => {
    const verifyToken = JWTService.verify(req.body.refreshToken);
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

    const userData = await UsuariosProvider.getByEmail(verifyToken.email.toLowerCase());
    if(userData instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: userData.message
            }
        })
    }

    const accessToken = JWTService.generateAccessToken({uid: verifyToken.uid, email: verifyToken.email});
    const refreshToken = JWTService.generateRefreshToken({uid: verifyToken.uid, email: verifyToken.email});

    return res.status(StatusCodes.OK).json({
        accessToken,
        refreshToken,
        userData: {nome: userData.nome, foto: userData.foto}
    });

}