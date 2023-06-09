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

export const getAllValidation = Validation([
    {
        path: 'query',
        schema: validationQuery
    }
])

type TQueryProps = z.infer<typeof validationQuery>;

export const getAll = async (req:Request<{}, {}, {}, TQueryProps>, res: Response) => {
    const userId = Number(req.headers.userId);

    const totalCount = await ProdutosDosUsuariosProvider.count(userId, req.query.filter);
    if(totalCount instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default: totalCount.message
            }
        })
    }

    const result = await ProdutosDosUsuariosProvider.getAll(userId, req.query.page, req.query.limit, req.query.filter);
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default: result.message
            }
        })
    }

    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', totalCount);

    return res.status(StatusCodes.OK).json(result);
}