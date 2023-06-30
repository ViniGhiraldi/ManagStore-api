import { Request, Response } from "express";
import { UsuariosProvider } from "../../database/providers";
import { StatusCodes } from "http-status-codes";

export const deleteById = async (req:Request, res:Response) => {
    const result = await UsuariosProvider.deleteById(Number(req.headers.userId));
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default: result.message
            }
        })
    }

    return res.status(StatusCodes.NO_CONTENT).json();
}