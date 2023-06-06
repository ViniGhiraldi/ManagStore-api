import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ZodObject, ZodFormattedError } from 'zod';

type TProperty = 'body' | 'header' | 'params' | 'query';

type TValidationObjectProps = {
    path: TProperty;
    schema: ZodObject<any>;
}

export type TValidationProps = TValidationObjectProps[];

type TValidation = (validations: TValidationProps) => RequestHandler;

export const Validation: TValidation = (validations) => async (req, res, next) => {
    const errorsResult: Record<string, ZodFormattedError<{[x: string]: any;}, string>> = {};

    validations.forEach(async objectValidation => {
        const result = objectValidation.schema.safeParse(req[objectValidation.path])

        if(!result.success){
            errorsResult[objectValidation.path] = result.error.format();
        }
    })

    if(Object.entries(errorsResult).length){
        return res.status(StatusCodes.BAD_REQUEST).json({errors: errorsResult});
    }
    return next();
}