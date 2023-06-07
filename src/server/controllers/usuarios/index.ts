import * as updateById from './UpdateById';
import * as deleteById from './DeleteById';
import * as signUp from './SignUp';
import * as signIn from './SignIn';

export const UsuariosController = {
    ...updateById,
    ...deleteById,
    ...signUp,
    ...signIn
};