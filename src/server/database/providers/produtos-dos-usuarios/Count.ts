import { Knex } from "../../knex"

export const count = async (user_id: number, filter = '', category = ''): Promise<number | Error> => {
    try {
        const [{count}] = await Knex('produtos')
            .innerJoin('produtos_dos_usuarios', 'produtos_dos_usuarios.produto_id', 'produtos.id')
            .where('produtos_dos_usuarios.user_id', '=', user_id)
            .andWhere('produtos.categoria', 'like', `%${category}%`)
            .andWhere('produtos.nome', 'like', `%${filter}%`)
            .count<[{count: number}]>('* as count');

        if(Number.isInteger(Number(count))) return Number(count);

        return new Error('Erro ao consultar a quantidade total de registros');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao consultar a quantidade total de registros');
    }
}