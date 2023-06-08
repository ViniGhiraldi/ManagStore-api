import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";
import { ProdutosDosUsuariosProvider } from "../../database/providers";
import { StatusCodes } from "http-status-codes";
import { IProdutosDosUsuarios } from "../../shared/models";

const validationParams = z.object({
    user_id: z.string().regex(/^\d+$/).transform(Number).refine((n) => n>0),
    produto_id: z.string().regex(/^\d+$/).transform(Number).refine((n) => n>0)
})

export const getByIdValidation = Validation([
    {
        path: 'params',
        schema: validationParams
    }
])

type TParamsProps = {
    user_id?: number;
    produto_id?: number;
};

export const getById = async (req:Request<TParamsProps>, res:Response) => {
    if(!req.params.user_id || !req.params.produto_id) return res.status(StatusCodes.BAD_REQUEST).json({
        errors: {
            default: 'user_id e produto_id precisam ser informados'
        }
    })

    const result = await ProdutosDosUsuariosProvider.getById(req.params as IProdutosDosUsuarios);
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default: result.message
            }
        })
    }

    return res.status(StatusCodes.OK).json(result);
}