import { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('produtos_dos_usuarios', table => {
        table
            .bigInteger('user_id')
            .index()
            .notNullable()
            .checkPositive()
            .primary()
            .references('id')
            .inTable('usuarios')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .bigInteger('produto_id')
            .index()
            .notNullable()
            .checkPositive()
            .primary()
            .references('id')
            .inTable('produtos')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .then(()=>{
        console.log(`# Created table produtos_dos_usuarios`)
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('produtos_dos_usuarios')
    .then(()=>{
        console.log(`# Dropped table produtos_dos_usuarios`)
    })
}