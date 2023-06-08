import * as getAllByUserId from './GetAllByUserId';
import * as deleteById from './DeleteById';
import * as getById from './GetById';
import * as create from './Create';

export const ProdutosDosUsuariosProvider = {
    ...getAllByUserId,
    ...deleteById,
    ...getById,
    ...create
}