import { IProdutosDosUsuarios } from "../../../shared/models";
import { Knex } from "../../knex"

export const deleteById = async (data: IProdutosDosUsuarios): Promise<void | Error> => {
    try {
        const result = await Knex('produtos_dos_usuarios')
            .where('user_id', '=', data.user_id)
            .andWhere('produto_id', '=', data.produto_id)
            .del();

        if(result) return;

        return new Error('Erro ao deletar registro');
    } catch (error) {
        console.log(error)
        return new Error('Erro ao deletar registro');
    }
}