import express from 'express';
import 'dotenv/config';
import { routes } from './routes';
import cors from 'cors';

const Server = express();

Server.use(cors({
    origin: process.env.CORS_ACCESS?.split(' ') || []
}))

Server.use(express.json({limit: '5mb'}));

Server.use(express.urlencoded({limit: '5mb'}));

Server.use(routes);


export { Server };