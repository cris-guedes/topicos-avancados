import express from "express";
import dotenv from "dotenv";
import { setUpRoutes } from "./shared/config/set-up-routes";
import cors from "cors";
import Fastify from "fastify"
dotenv.config()


const server = Fastify({logger:true});

setUpRoutes(server)

server.post('/ping',(req,res)=>console.log(req.body))


console.log(process.env.PORT)
console.log(process.env.SERVER_PORT)

server.listen({port:3000})
