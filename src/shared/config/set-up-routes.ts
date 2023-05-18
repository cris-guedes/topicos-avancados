import {FastifyInstance}from "fastify"
import addressRoute from "../routes/address";
import carRegistrationRoutes from "../routes/car-registration";
import partRoutes from "../routes/part";

export const setUpRoutes = (app:FastifyInstance )=>{
    
        app.register(addressRoute, {
                prefix: 'address',
              })
        app.register(carRegistrationRoutes, {
                prefix: 'car-registration',
              })
              app.register(partRoutes, {
                prefix: 'part',
              })
       
}