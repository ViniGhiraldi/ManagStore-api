import { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('produtos', table => {
        table.bigIncrements('id').primary().index();
        table.string('nome').notNullable().checkLength('>', 2).index();
        table.decimal('valor', 8, 2).notNullable().checkPositive()
        table.decimal('promocao', 3, 2).checkPositive().defaultTo(0);
        table.string('descricao').notNullable().checkLength('>', 39);
        table.json('foto').notNullable()
    })
    .then(()=>{
        console.log(`# Created table produtos`)
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('produtos')
    .then(()=>{
        console.log(`# Dropped table produtos`)
    })
}