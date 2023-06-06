import { IProduto, IProdutosDosUsuarios, IUsuario } from "../../../shared/models";

declare module 'knex/types/tables'{
    interface Tables{
        produtos: IProduto
        usuario: IUsuario
        produtos_dos_usuarios: IProdutosDosUsuarios
    }
}