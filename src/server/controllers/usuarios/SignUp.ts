import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";
import { UsuariosProvider } from "../../database/providers";
import { StatusCodes } from "http-status-codes";

const validationBody = z.object({
    nome: z.string().min(3),
    email: z.string().email().min(5).toLowerCase(),
    senha: z.string().min(5),
})

export const signUpValidation = Validation([
    {
        path: 'body',
        schema: validationBody
    }
])

type TBodyProps = z.infer<typeof validationBody>;

export const signUp = async (req:Request<{}, {}, TBodyProps>, res:Response) => {
    const result = await UsuariosProvider.create({...req.body, email: req.body.email.toLowerCase()});
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }

    return res.status(StatusCodes.CREATED).json(result);
}