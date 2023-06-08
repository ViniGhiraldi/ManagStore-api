import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";
import { ProdutosDosUsuariosProvider } from "../../database/providers";
import { StatusCodes } from "http-status-codes";

const validationBody = z.object({
    user_id: z.number().int().positive(),
    produto_id: z.number().int().positive()
})

export const createValidation = Validation([
    {
        path: 'body',
        schema: validationBody
    }
])

type TBodyProps = z.infer<typeof validationBody>;

export const create = async (req:Request<{}, {}, TBodyProps>, res:Response) => {
    const result = await ProdutosDosUsuariosProvider.create(req.body);
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }

    return res.status(StatusCodes.CREATED).json(result);
}