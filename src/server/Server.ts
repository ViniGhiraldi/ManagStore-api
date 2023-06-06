import express from 'express';
import 'dotenv/config';
import { routes } from './routes';

const Server = express();

Server.use(express.json());
Server.use(routes);


export { Server };