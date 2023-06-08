import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";
import { ProdutosDosUsuariosProvider } from "../../database/providers";
import { StatusCodes } from "http-status-codes";

const validationQuery = z.object({
    limit: z.number().or(z.string().regex(/^\d+$/).transform(Number)).refine((n) => n>0).optional(),
    page: z.number().or(z.string().regex(/^\d+$/).transform(Number)).refine((n) => n>0).optional(),
    filter: z.string().optional() 
})

const validationParams = z.object({
    user_id: z.string().regex(/^\d+$/).transform(Number).refine((n) => n>0)
})

export const getAllByUserIdValidation = Validation([
    {
        path: 'query',
        schema: validationQuery
    },
    {
        path: 'params',
        schema: validationParams
    }
])

type TQueryProps = z.infer<typeof validationQuery>;

type TParamsProps = {
    user_id?: number;
};

export const getAllByUserId = async (req:Request<TParamsProps, {}, {}, TQueryProps>, res: Response) => {
    if(!req.params.user_id) return res.status(StatusCodes.BAD_REQUEST).json({
        errors: {
            default: 'user_id precisa ser informado'
        }
    })

    const result = await ProdutosDosUsuariosProvider.getAllByUserId(req.params.user_id, req.query.page, req.query.limit, req.query.filter);
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default: result.message
            }
        })
    }

    return res.status(StatusCodes.OK).json(result);
}