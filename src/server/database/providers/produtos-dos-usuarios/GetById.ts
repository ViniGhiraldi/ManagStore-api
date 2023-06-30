import { IProduto, IProdutosDosUsuarios } from "../../../shared/models";
import { Knex } from "../../knex"

export const getById = async (data: IProdutosDosUsuarios): Promise<IProduto | Error> => {
    try {
        const result: IProduto | undefined = await Knex('produtos')
            .innerJoin('produtos_dos_usuarios', 'produtos_dos_usuarios.produto_id', 'produtos.id')
            .select('produtos.id', 'produtos.nome', 'produtos.descricao', 'produtos.categoria', 'produtos.valor', 'produtos.promocao', 'produtos.foto')
            .where('user_id', '=', data.user_id)
            .andWhere('produto_id', '=', data.produto_id)
            .first();

        if(result) return result;

        return new Error('Erro ao consultar registro');
    } catch (error) {
        console.log(error)
        return new Error('Erro ao consultar registro');
    }
}