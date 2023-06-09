import { IProduto } from "../../../shared/models";
import { Knex } from "../../knex"

export const getAll = async (user_id: number, page = 1, limit = Number(process.env.LIMIT) || 12, filter = ''): Promise<IProduto[] | Error> => {
    try {
        const result = await Knex('produtos')
            .innerJoin('produtos_dos_usuarios', 'produtos_dos_usuarios.produto_id', 'produtos.id')
            .select('produtos.id', 'produtos.nome', 'produtos.descricao', 'produtos.valor', 'produtos.promocao', 'produtos.foto')
            .where('user_id', '=', user_id)
            .andWhere('nome', 'like', `%${filter}%`)
            .limit(limit)
            .offset((page - 1) * limit);

        return result as IProduto[];
    } catch (error) {
        console.log(error);
        return new Error('Erro ao consultar os registros');
    }
}