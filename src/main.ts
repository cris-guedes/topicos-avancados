import express from "express";
import dotenv from "dotenv";
import { setUpRoutes } from "./shared/config/set-up-routes";
import cors from "cors";
dotenv.config()
try{

const server = express();
setUpRoutes(server)
server.use(cors({ origin: '*' }))
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.raw({type:"*"}))


console.log(process.env.PORT)
console.log(process.env.SERVER_PORT)

server.listen(3000,()=>console.log("server rodando"))
}catch(e){
    console.log(e)
}