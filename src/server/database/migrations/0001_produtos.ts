import { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('produtos', table => {
        table.bigIncrements('id').primary().index();
        table.string('nome').notNullable().checkLength('>', 2).index();
        table.decimal('valor').notNullable().checkPositive()
        table.integer('promocao').checkBetween([0, 100]).defaultTo(0);
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