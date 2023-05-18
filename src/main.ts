
import dotenv from "dotenv";
import { setUpRoutes } from "./shared/config/set-up-routes";
import Fastify from "fastify"
dotenv.config()


const server = Fastify({logger:true});

setUpRoutes(server)

server.post('/ping',(req,res)=>console.log(req.body))

const host = '0.0.0.0';
const port:any = process.env.PORT || 3000;

server.listen({port,host})
