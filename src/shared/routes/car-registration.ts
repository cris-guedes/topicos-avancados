import { Router} from "express";

import {} from "../../modules/car-registration/src"
import { makeCreateCarRegistrations,makeReadCarRegistration,makeReadCarRegistrations,makeUpdateCarRegistrations } from "../../modules/car-registration/src";

export default(route:Router )=>{
    route.get('/car-registration/:id',async (request,response)=>{
        response.set('Accept', 'text');
        
        const {params} = request
        
       

        //const controller = await makeReadCarRegistration().handle(params.id)
        
        //response.json(controller.data).status(controller.statusCode)
    })

    route.get('/car-registrations',async (request,response)=>{
        response.set('Accept', 'text');
        
        const controller = await makeReadCarRegistrations().handle()
        
        response.json(controller.data).status(controller.statusCode)
    })

    route.post('/car-registration',async (request,response)=>{
        response.set('Accept', 'application/json; charset=utf-8');
        
        const {body} = request
        console.log(body)
        
        const controller = await makeCreateCarRegistrations().handle({params:body})
     
        
        response.json(controller.data).status(controller.statusCode)
    })

    route.put('/car-registration/:id',async (request,response)=>{

        response.set('Accept', 'application/json; charset=utf-8');
        
        const {body} = request
        const {params} = request

        
        const controller = await makeUpdateCarRegistrations().handle({params:body},params.id)
     
        
        response.json(controller.data).status(controller.statusCode)

    })

   

}

