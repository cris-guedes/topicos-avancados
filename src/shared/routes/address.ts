import { Router} from "express";

import {makeCreateAddress,makeReadAddress,makeReadAddresses,makeUpdateAddress} from "../../modules/address/src"
const route = Router()

    route.get('/:id',async (request,response)=>{
        response.set('Accept', 'text');
        
        const {params} = request
        
       

        const controller = await makeReadAddress().handle({params})
        
        response.json(controller.data).status(controller.statusCode)
    })

    route.get('/',async (request,response)=>{
        response.set('Accept', 'text');
        
        const controller = await makeReadAddresses().handle()
        
        response.json(controller.data).status(controller.statusCode)
    })

    route.post('/',async (request,response)=>{
        response.set('Accept', 'application/json; charset=utf-8');
        
        const {body} = request
        console.log(body)
        
        const controller = await makeCreateAddress().handle({params:body})
     
        
        response.json(controller.data).status(controller.statusCode)
    })

    route.put('/:id',async (request,response)=>{

        response.set('Accept', 'application/json; charset=utf-8');
        
        const {body} = request
        const {params} = request

        
        const controller = await makeUpdateAddress().handle({params:body},params.id)
     
        
        response.json(controller.data).status(controller.statusCode)

    })

    

   
export default route


