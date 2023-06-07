import * as getByEmail from './GetByEmail';
import * as updateById from './UpdateById';
import * as deleteById from './DeleteById';
import * as create from './Create';

export const UsuariosProvider = {
    ...getByEmail,
    ...updateById,
    ...deleteById,
    ...create
}