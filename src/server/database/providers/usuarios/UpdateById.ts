import { IUsuario } from "../../../shared/models";
import { Knex } from "../../knex";

export const updateById = async (id: number, data: Omit<IUsuario, 'id'>): Promise<void | Error> => {
    try {
        const result = await Knex('usuarios').where('id', '=', id).update(data);

        if(result) return;

        return new Error('Erro ao atualizar registro');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao atualizar registro');
    }
}