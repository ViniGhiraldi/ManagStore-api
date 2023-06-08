import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";
import { UsuariosProvider } from "../../database/providers";
import { StatusCodes } from "http-status-codes";
import { PasswordCrypto } from "../../shared/services";

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

    return res.status(StatusCodes.OK).json(userData);

}