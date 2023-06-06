import { Request, Response } from "express";
import { z } from "zod";
import { Validation } from "../../shared/middleware";

const validationBody = z.object({
    user_id: z.number().positive(),
    produto_id: z.number().positive()
})

export const createValidation = Validation([
    {
        path: 'body',
        schema: validationBody
    }
])

type TBodyProps = z.infer<typeof validationBody>;

export const create = async (req:Request<{}, {}, TBodyProps>, res:Response) => {
    return res.send(`create - produtos-dos-usuarios - user_id: ${req.body.user_id} - produto_id: ${req.body.produto_id}`);
}