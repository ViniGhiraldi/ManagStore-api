import { IProduto } from "../../../shared/models";
import { Knex } from "../../knex";

export const create = async (data: Omit<IProduto, 'id'>): Promise<number | Error> => {
    try {
        const [result] = await Knex('produtos').insert(data).returning('id');
        
        return result.id;

        return new Error('Erro ao criar registro');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao criar registro');
    }
}