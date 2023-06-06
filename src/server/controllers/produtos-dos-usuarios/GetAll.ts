import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";

const validationQuery = z.object({
    limit: z.number().or(z.string().regex(/^\d+$/).transform(Number)).refine((n) => n>0).optional(),
    page: z.number().or(z.string().regex(/^\d+$/).transform(Number)).refine((n) => n>0).optional(),
    filter: z.string().optional()
})

const validationBody = z.object({
    user_id: z.number().positive()
})

export const getAllValidation = Validation([
    {
        path: 'query',
        schema: validationQuery
    },
    {
        path: 'body',
        schema: validationBody
    }
])

type TQueryProps = z.infer<typeof validationQuery>;

type TBodyProps = z.infer<typeof validationBody>;

export const getAll = async (req:Request<{}, {}, TBodyProps, TQueryProps>, res: Response) => {
    return res.send(`getAll - produtos-dos-usuarios - filter?: ${req.query.filter} - page?: ${req.query.page} - limit?: ${req.query.limit} - id: ${req.body.user_id}`);
}