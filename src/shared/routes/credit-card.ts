import { Router} from "express";
import { makeCreateCreditCards, makeReadCreditCard, makeReadCreditCards, makeUpdateCreditCards } from "../../modules/cartao-de-credito/src";

export default(route:Router )=>{
    route.get('/card/:id',async (request,response)=>{
        response.set('Accept', 'text');
        
        const {params} = request
        params

        const controller = await makeReadCreditCard().handle({params})
        
        response.json(controller.data).status(controller.statusCode)
    })

    route.get('/cards',async (request,response)=>{
        response.set('Accept', 'text');
        
        const controller = await makeReadCreditCards().handle()
        
        response.json(controller.data).status(controller.statusCode)
    })

    route.post('/card',async (request,response)=>{
        response.set('Accept', 'application/json; charset=utf-8');
        
        const {body} = request
        console.log(body)
        
        const controller = await makeCreateCreditCards().handle({params:body})
     
        
        response.json(controller.data).status(controller.statusCode)
    })

    route.put('/card/:id',async (request,response)=>{

        response.set('Accept', 'application/json; charset=utf-8');
        
        const {body} = request
        const {params} = request

        
        const controller = await makeUpdateCreditCards().handle({params:body},params.id)
     
        
        response.json(controller.data).status(controller.statusCode)

    })

   

}

