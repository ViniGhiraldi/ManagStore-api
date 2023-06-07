import { IUsuario } from "../../../shared/models";
import { Knex } from "../../knex";

export const create = async (data: Omit<IUsuario, 'id'>): Promise<number | Error> => {
    try {
        const [result] = await Knex('usuarios').insert(data).returning('id');

        if(result.id) return result.id;

        return new Error('Erro ao criar registro');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao criar registro');
    }
}