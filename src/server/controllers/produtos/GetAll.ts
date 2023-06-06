import { Request, Response } from "express";
import { z } from 'zod';
import { Validation } from "../../shared/middleware/Validation";

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
]);

type TQueryProps = z.infer<typeof validationQuery>;

export const getAll = async (req:Request<{}, {}, {}, TQueryProps>, res:Response) => {
    return res.send(`getAll - produtos - filter?: ${req.query.filter} - page?: ${req.query.page} - limit?: ${req.query.limit}`);
}