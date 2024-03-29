import { Knex } from "../../knex"

export const count = async (filter = '', category = ''): Promise<number | Error> => {
    try {
        const [{count}] = await Knex('produtos')
            .where('categoria', 'like', `%${category}%`)
            .andWhere('nome', 'like', `%${filter}%`)
            .count<[{count: number}]>('* as count');

        if(Number.isInteger(Number(count))) return Number(count);

        return new Error('Erro ao consultar a quantidade total de registros');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao consultar a quantidade total de registros');
    }
}