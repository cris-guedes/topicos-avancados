import {FastifyInstance} from "fastify"

import { makeCreateCarRegistrations,makeReadCarRegistration,makeReadCarRegistrations,makeUpdateCarRegistrations } from "../../modules/car-registration/src";

async function carRegistrationRoutes(route:FastifyInstance){

    route.get('/:id',async (request,response)=>{
        //response.set('Accept', 'text');
        
        const {params}:any = request
        
        const controller = await makeReadCarRegistration().handle({params})
        
        response.send(controller.data).status(controller.statusCode)
    })

    route.get('/',async (request,response)=>{
        //response.set('Accept', 'text');
        console.log("car-registration-route")
        const controller = await makeReadCarRegistrations().handle()
        
        response.send(controller.data).status(controller.statusCode)
    })

    route.post('/',async (request,response)=>{
        //response.set('Accept', 'application.send; charset=utf-8');
        
        const {body} = request
        console.log(body)
        
        const controller = await makeCreateCarRegistrations().handle({params:body})
     
        
        response.send(controller.data).status(controller.statusCode)
    })

    route.put('/:id',async (request,response)=>{

        //response.set('Accept', 'application.send; charset=utf-8');
        
        const {body}:any = request
        const {params}:any = request

        
        const controller = await makeUpdateCarRegistrations().handle({params:body},params.id)
     
        
        response.send(controller.data).status(controller.statusCode)

    })

}

export default carRegistrationRoutes

