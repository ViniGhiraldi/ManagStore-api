import * as getAll from './GetAll';
import * as create from './Create';
import * as deleteById from './DeleteById';

export const ProdutosDosUsuariosController = {
    ...getAll,
    ...create,
    ...deleteById
}