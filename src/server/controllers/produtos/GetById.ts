import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";

const validationParams = z.object({
    id: z.string().regex(/^\d+$/).transform(Number).refine((n) => n>0)
});

export const getByIdValidation = Validation([
    {
        path: 'params',
        schema: validationParams
    }
]);

interface IParamsProps{
    id?: number
}

export const getById = async (req:Request<IParamsProps>, res:Response) => {
    return res.send(`getById - produtos - id: ${req.params.id}`);
}