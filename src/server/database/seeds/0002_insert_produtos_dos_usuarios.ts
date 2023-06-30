import { Knex } from "knex";
import { IProdutosDosUsuarios } from "../../shared/models";

export const seed = async (knex: Knex) => {
    const [{count}] = await knex('produtos_dos_usuarios').count<[{count: number}]>('* as count');
    if(!Number.isInteger(count) || Number(count) > 0) return;

    await knex('produtos_dos_usuarios').insert(produtosDosUsuarios);
}

const produtosDosUsuarios: IProdutosDosUsuarios[] = [
    {
        user_id: 1,
        produto_id: 1
    },
    {
        user_id: 1,
        produto_id: 4
    },
    {
        user_id: 1,
        produto_id: 8
    },
    {
        user_id: 1,
        produto_id: 15
    },
    {
        user_id: 1,
        produto_id: 11
    },
    {
        user_id: 2,
        produto_id: 2
    },
    {
        user_id: 2,
        produto_id: 4
    },
    {
        user_id: 2,
        produto_id: 5
    },
    {
        user_id: 2,
        produto_id: 7
    },
    {
        user_id: 2,
        produto_id: 9
    },
    {
        user_id: 2,
        produto_id: 11
    },
    {
        user_id: 2,
        produto_id: 12
    },
    {
        user_id: 2,
        produto_id: 14
    },
    {
        user_id: 2,
        produto_id: 15
    },
    {
        user_id: 2,
        produto_id: 16
    },
    {
        user_id: 2,
        produto_id: 17
    },
    {
        user_id: 2,
        produto_id: 1
    }
]