import Express from "express";
import dotenv from "dotenv";
import { setUpRoutes } from "./shared/config/set-up-routes";
dotenv.config()

const server = Express();
setUpRoutes(server)

server.use(Express.urlencoded({ extended: true }));
server.use(Express.json());

server.listen(process.env.SERVER_PORT,()=>console.log("server rodando na porta "+process.env.SERVER_PORT))