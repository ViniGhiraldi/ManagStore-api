import { Knex } from "../../knex"

export const deleteById = async (id: number): Promise<void | Error> => {
    try {
        await Knex('usuarios').where('id', '=', id).del();
    } catch (error) {
        console.log(error)
        return new Error('Erro ao deletar registro');
    }
}