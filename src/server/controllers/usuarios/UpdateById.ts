import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { UsuariosProvider } from "../../database/providers";

const validationParams = z.object({
    id: z.string().regex(/^\d+$/).transform(Number).refine((n) => n>0)
})

const validationBody = z.object({
    nome: z.string().min(3),
    email: z.string().email().min(5).toLowerCase(),
    senha: z.string().min(5),
})

export const updateByIdValidation = Validation([
    {
        path: 'params',
        schema: validationParams
    },
    {
        path: 'body',
        schema: validationBody
    }
])

type TParamsProps = {
    id?: number;
}

type TBodyProps = z.infer<typeof validationBody>;

export const updateById = async (req:Request<TParamsProps, {}, TBodyProps>, res:Response) => {
    if(!req.params.id) return res.status(StatusCodes.BAD_REQUEST).json({
        errors: {
            default: 'id precisa ser informado'
        }
    })

    const result = await UsuariosProvider.updateById(req.params.id, {...req.body, email: req.body.email.toLowerCase()});
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    };

    return res.status(StatusCodes.NO_CONTENT).json();
}