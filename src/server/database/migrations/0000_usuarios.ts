import { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('usuarios', table => {
        table.bigIncrements('id').primary().index();
        table.string('nome').notNullable().checkLength('>', 2);
        table.string('foto').defaultTo('https://i.pinimg.com/474x/9b/47/a0/9b47a023caf29f113237d61170f34ad9.jpg');
        table.string('senha').notNullable().checkLength('>', 4);
        table.string('email').index().unique().notNullable().checkLength('>', 4);
    })
    .then(()=>{
        console.log(`# Created table usuarios`)
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('usuarios')
    .then(()=>{
        console.log(`# Dropped table usuarios`)
    })
}