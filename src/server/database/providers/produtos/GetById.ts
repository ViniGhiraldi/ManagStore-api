import { IProduto } from "../../../shared/models";
import { Knex } from "../../knex";

export const getById = async (id: number): Promise<IProduto | Error> => {
    try {
        const result = await Knex('produtos').select('*').where('id', '=', id).first();

        if(result) return result;

        return new Error('Erro ao consultar registro');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao consultar registro');
    }
}