import { IProdutosDosUsuarios } from "../../../shared/models";
import { Knex } from "../../knex";

export const create = async (data: IProdutosDosUsuarios): Promise<number[] | Error> => {
    try {
        const result = await Knex('produtos_dos_usuarios').insert(data);
        if(result) return result;

        return new Error('Erro ao criar registro');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao criar registro');
    }
}