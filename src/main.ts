import express from "express";
import dotenv from "dotenv";
import { setUpRoutes } from "./shared/config/set-up-routes";
import cors from "cors";
import Fastify from "fastify"
dotenv.config()


const server = Fastify({logger:true});

setUpRoutes(server)

server.post('/ping',(req,res)=>console.log(req.body))


const localPort = process.env.PORT as unknown as number
const remotePort = process.env.SERVER_PORT as unknown as number

server.listen({port:localPort|remotePort|3000})
