import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { ProdutosProvider } from "../../database/providers";

const validationParams = z.object({
    id: z.string().regex(/^\d+$/).transform(Number).refine((n) => n>0)
})

const validationBody = z.object({
    nome: z.string().min(3),
    descricao: z.string().min(40),
    categoria: z.enum(['livros', 'jogos']),
    valor: z.number().transform(value => Number(value.toFixed(2))).pipe(z.number().positive()),
    promocao: z.number().int().nonnegative().lte(100).default(0),
    foto: z.string()
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

    const result = await ProdutosProvider.updateById(req.params.id, req.body);
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    };

    return res.status(StatusCodes.NO_CONTENT).json();
}