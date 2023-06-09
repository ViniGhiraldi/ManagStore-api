import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { UsuariosProvider } from "../../database/providers";
import { PasswordCrypto } from "../../shared/services";

const validationBody = z.object({
    nome: z.string().min(3),
    email: z.string().email().min(5).toLowerCase(),
    senha: z.string().min(5),
})

export const updateByIdValidation = Validation([
    {
        path: 'body',
        schema: validationBody
    }
])

type TBodyProps = z.infer<typeof validationBody>;

export const updateById = async (req:Request<{}, {}, TBodyProps>, res:Response) => {
    const passwordHashed = await PasswordCrypto.passwordHashed(req.body.senha);

    const result = await UsuariosProvider.updateById(Number(req.headers.userId), {
        ...req.body, 
        email: req.body.email.toLowerCase(), 
        senha: passwordHashed
    });
    
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    };

    return res.status(StatusCodes.NO_CONTENT).json();
}