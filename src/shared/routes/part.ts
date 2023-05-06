import { Router} from "express";

import {makeCreateParts,makeReadPart,makeReadParts,makeUpdateParts} from "../../modules/part/src"

export default(route:Router )=>{
    route.get('/part/:id',async (request,response)=>{
        response.set('Accept', 'text');
        
        const {params} = request
        
       

        //const controller = await makeReadPart().handle(params.id)
        
        //response.json(controller.data).status(controller.statusCode)
    })

    route.get('/parts',async (request,response)=>{
        response.set('Accept', 'text');
        
        const controller = await makeReadParts().handle()
        
        response.json(controller.data).status(controller.statusCode)
    })

    route.post('/part',async (request,response)=>{
        response.set('Accept', 'application/json; charset=utf-8');
        
        const {body} = request
        console.log(body)
        
        const controller = await makeCreateParts().handle({params:body})
     
        
        response.json(controller.data).status(controller.statusCode)
    })

    route.put('/part/:id',async (request,response)=>{

        response.set('Accept', 'application/json; charset=utf-8');
        
        const {body} = request
        const {params} = request

        
        const controller = await makeUpdateParts().handle({params:body},params.id)
     
        
        response.json(controller.data).status(controller.statusCode)

    })

   

}

