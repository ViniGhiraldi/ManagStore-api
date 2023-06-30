import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";
import { ProdutosDosUsuariosProvider } from "../../database/providers";
import { StatusCodes } from "http-status-codes";

const validationParams = z.object({
    produto_id: z.string().regex(/^\d+$/).transform(Number).refine((n) => n>0)
})

export const getByIdValidation = Validation([
    {
        path: 'params',
        schema: validationParams
    }
])

type TParamsProps = {
    produto_id?: number;
};

export const getById = async (req:Request<TParamsProps>, res:Response) => {
    if(!req.params.produto_id) return res.status(StatusCodes.BAD_REQUEST).json({
        errors: {
            default: 'produto_id precisa ser informado'
        }
    })

    const result = await ProdutosDosUsuariosProvider.getById({
        user_id: Number(req.headers.userId), 
        produto_id: req.params.produto_id
    });
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default: result.message
            }
        })
    }

    return res.status(StatusCodes.OK).json(result);
}