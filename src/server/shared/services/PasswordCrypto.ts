import { compare, genSalt, hash } from "bcryptjs"

const SALT_RANDOMS = 8;

const passwordHashed = async (senha: string) => {
    const salt = await genSalt(SALT_RANDOMS);
    return await hash(senha, salt);
}

const verifyPassword = async (senha: string, hash: string) => {
    return await compare(senha, hash);
}

export const PasswordCrypto = {
    passwordHashed,
    verifyPassword
}