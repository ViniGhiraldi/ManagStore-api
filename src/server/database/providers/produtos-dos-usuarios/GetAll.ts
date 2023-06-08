import { IProduto } from "../../../shared/models";
import { Knex } from "../../knex"

export const getAll = async (user_id: number, page = 1, limit = Number(process.env.LIMIT) || 12, filter = ''): Promise<any | Error> => {
    try {
        const result = await Knex('produtos').select('*').innerJoin('produtos_dos_usuarios', 'produtos_dos_usuarios.produto_id', 'produtos.id').where('user_id', '=', user_id);
        console.log(result)

        /* .where('nome', 'like', `%${filter}%`)
            .limit(limit)
            .offset((page - 1) * limit); */

        return result;
    } catch (error) {
        console.log(error);
        return new Error('Erro ao consultar os registros');
    }
}