import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";
import { UsuariosProvider } from "../../database/providers";
import { StatusCodes } from "http-status-codes";
import { JWTService, PasswordCrypto } from "../../shared/services";

const validationBody = z.object({
    email: z.string().email().min(5).toLowerCase(),
    senha: z.string().min(5)
})

export const signInValidation = Validation([
    {
        path: 'body',
        schema: validationBody
    }
])

type TBodyProps = z.infer<typeof validationBody>;

export const signIn = async (req:Request<{}, {}, TBodyProps>, res:Response) => {
    const userData = await UsuariosProvider.getByEmail(req.body.email.toLowerCase());
    if(userData instanceof Error){
        if(userData.message === 'Email ou senha são inválidos'){
            return res.status(StatusCodes.UNAUTHORIZED).json({
                errors: {
                    default: userData.message
                }
            })
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: userData.message
            }
        })
    }

    const verifyPassword = await PasswordCrypto.verifyPassword(req.body.senha, userData.senha)

    if(!verifyPassword){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {
                default: 'Email ou senha são inválidos'
            }
        });
    }

    const accessToken = JWTService.generateAccessToken({uid: userData.id, email: userData.email});
    const refreshToken = JWTService.generateRefreshToken({uid: userData.id, email: userData.email});

    return res.status(StatusCodes.OK).json({
        accessToken, 
        refreshToken, 
        userData: {nome: userData.nome, foto: userData.foto}
    });

    /* const result = {
        accessToken,
        refreshToken,
        userData: {
            nome: userData.nome, foto: userData.foto
        }
    };

    return res.status(StatusCodes.OK).cookie('userAccess', JSON.stringify(result), {}).json(); */

}