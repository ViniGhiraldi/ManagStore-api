import { Knex } from "knex";
import { IUsuario } from "../../shared/models";
import { PasswordCrypto } from "../../shared/services";

export const seed = async (knex: Knex) => {
    const [{count}] = await knex('usuarios').count<[{count: number}]>('* as count');
    if(!Number.isInteger(count) || Number(count) > 0) return;

    const usuariosComSenhaCriptografada = usuarios.map(async usuario => {
        try {
            const hash = await PasswordCrypto.passwordHashed(usuario.senha);
            return {...usuario, senha: hash}
        } catch (error) {
            return;
        }
    })

    usuariosComSenhaCriptografada.map(usuarioComSenhaCriptografada => {
        usuarioComSenhaCriptografada.then(async result => {
            if(result) await knex('usuarios').insert(result);
        })
    })
}

const usuarios: Omit<IUsuario, 'id'>[] = [
    {
        nome: 'Marcelo Silva',
        foto: 'https://www.serpro.gov.br/menu/quem-somos/inovacao-aberta/hackserpro/hackathon-rede-brasil/mentores/foto-perfil-quadrada-marcos-almeida-filho.jpg/@@images/d948e405-3039-4226-9950-ee83f943e473.jpeg',
        email: 'marcelo@email.com',
        senha: '12345'
    },
    {
        nome: 'João Pereira',
        foto: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        email: 'joao@email.com',
        senha: '12345'
    },
    {
        nome: 'Administrador',
        email: 'admin@email.com',
        senha: '12345'
    }
]