import * as jwt from 'jsonwebtoken';

interface IJwtData {
    uid: number;
    email: string;
}

const generateAccessToken = (data: IJwtData): string | 'JWT_SECRET_NOT_FOUND' => {
    if(!process.env.JWT_SECRET) return 'JWT_SECRET_NOT_FOUND';

    return jwt.sign(data, process.env.JWT_SECRET, {expiresIn: '120s'});
}

const generateRefreshToken = (data: IJwtData): string | 'JWT_SECRET_NOT_FOUND' => {
    if(!process.env.JWT_SECRET) return 'JWT_SECRET_NOT_FOUND';

    return jwt.sign(data, process.env.JWT_SECRET, {expiresIn: '24h'});
}

const verify = (token: string) => {
    if(!process.env.JWT_SECRET) return 'JWT_SECRET_NOT_FOUND';

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(typeof decoded === 'string') return 'INVALID_TOKEN';

        return decoded as IJwtData;
    } catch (error) {
        return 'INVALID_TOKEN';
    }

}

export const JWTService = {
    generateAccessToken,
    generateRefreshToken,
    verify
}