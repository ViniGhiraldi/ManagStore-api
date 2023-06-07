import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";
import { UsuariosProvider } from "../../database/providers";
import { StatusCodes } from "http-status-codes";

const validationParams = z.object({
    id: z.string().regex(/^\d+$/).transform(Number).refine((n) => n>0)
});

export const deleteByIdValidation = Validation([
    {
        path: 'params',
        schema: validationParams
    }
]);

type TParamsProps = {
    id?: number
}

export const deleteById = async (req:Request<TParamsProps>, res:Response) => {
    if(!req.params.id) return res.status(StatusCodes.BAD_REQUEST).json({
        errors: {
            default: 'id precisa ser informado'
        }
    })

    const result = await UsuariosProvider.deleteById(req.params.id);
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default: result.message
            }
        })
    }

    return res.status(StatusCodes.NO_CONTENT).json(result);
}