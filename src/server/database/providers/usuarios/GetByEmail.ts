import { IUsuario } from "../../../shared/models";
import { Knex } from "../../knex"

export const getByEmail = async (email: string): Promise<IUsuario | Error> => {
    try {
        const result = await Knex('usuarios').select('*').where('email', '=', email).first();

        if(result) return result

        return new Error('Email ou senha são inválidos');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao consultar registro');
    }
}