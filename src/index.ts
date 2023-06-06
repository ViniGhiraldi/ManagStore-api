import { Server } from "./server/Server";

Server.listen(process.env.PORT || 3131, () => {
    console.log(`App rodando na porta ${process.env.PORT || 3131}`);
})