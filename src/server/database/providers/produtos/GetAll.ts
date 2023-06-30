import { IProduto } from "../../../shared/models";
import { Knex } from "../../knex"

export const getAll = async (page = 1, limit = Number(process.env.LIMIT) || 12, filter = '', category = ''): Promise<IProduto[] | Error> => {
    try {
        const result = await Knex('produtos')
            .select('*')
            .where('categoria', 'like', `%${category}%`)
            .andWhere('nome', 'like', `%${filter}%`)
            .limit(limit)
            .offset((page - 1) * limit);

        return result;
    } catch (error) {
        console.log(error);
        return new Error('Erro ao consultar os registros');
    }
}