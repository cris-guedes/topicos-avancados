
import dotenv from "dotenv";
import { setUpRoutes } from "./shared/config/set-up-routes";
import Fastify from "fastify"
dotenv.config()


const server = Fastify({logger:true});

setUpRoutes(server)

server.post('/ping',(req,res)=>console.log(req.body))



server.listen({port:process.env.PORT as unknown as number ||3000})
