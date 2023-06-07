import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";
import { ProdutosProvider } from "../../database/providers";
import { StatusCodes } from "http-status-codes";

const validationBody = z.object({
    nome: z.string().min(3),
    descricao: z.string().min(40),
    valor: z.number().transform(value => Number(value.toFixed(2))).pipe(z.number().positive()),
    promocao: z.number().int().nonnegative().lte(100).default(0),
    foto: z.string()
})

export const createValidation = Validation([
    {
        path: 'body',
        schema: validationBody
    }
])

type TBodyProps = z.infer<typeof validationBody>;

export const create = async (req:Request<{}, {}, TBodyProps>, res:Response) => {
    console.log(req.body);
    const result = await ProdutosProvider.create(req.body);
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }
    
    return res.status(StatusCodes.CREATED).json(result);
}