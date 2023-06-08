import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";
import { ProdutosDosUsuariosProvider } from "../../database/providers";
import { StatusCodes } from "http-status-codes";

/*const validationQuery = z.object({

     limit: z.number().or(z.string().regex(/^\d+$/).transform(Number)).refine((n) => n>0).optional(),
    page: z.number().or(z.string().regex(/^\d+$/).transform(Number)).refine((n) => n>0).optional(),
    filter: z.string().optional() 
})*/

const validationBody = z.object({
    user_id: z.number().int().positive()
})

export const getAllValidation = Validation([
    /* {
        path: 'query',
        schema: validationQuery
    }, */
    {
        path: 'body',
        schema: validationBody
    }
])

/* type TQueryProps = z.infer<typeof validationQuery>; */

type TBodyProps = z.infer<typeof validationBody>;

export const getAll = async (req:Request<{}, {}, TBodyProps/* , TQueryProps */>, res: Response) => {
    const result = await ProdutosDosUsuariosProvider.getAll(req.body.user_id);
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default: result.message
            }
        })
    }

    return res.status(StatusCodes.OK).json(result);
}