import {FastifyInstance}from "fastify"

import {makeCreateAddress,makeReadAddress,makeReadAddresses,makeReadCityAddresses,makeUpdateAddress} from "../../modules/address/src"

async function addressRoute(route:FastifyInstance){

    route.get('/:id',async (request,response)=>{
        //response.set('Accept', 'text');
        
        const params:any = request.params
        console.log(request.params)
        
       

        const controller = await makeReadAddress().handle({params:params})
        
        response.send(controller.data).status(controller.statusCode)
    })

    route.get('/',async (request,response)=>{
        //response.set('Accept', 'text');
        const params:any = request.query
        const city =params.city
        console.log(request)
        const controller = city? await makeReadCityAddresses().handle({params:params}):await makeReadAddresses().handle()
        
        response.send(controller.data).status(controller.statusCode)
    })

    route.post('/',async (request,response)=>{
        //response.set('Accept', 'application/send; charset=utf-8');
        
        const {body} = request
        console.log(request)
        console.log(request.body)
        console.log(request.params)
        console.log(request.query)
    
        try{
        
        const controller = await makeCreateAddress().handle({params:body})
     
        
        response.send(controller.data).status(controller.statusCode)
        }catch(e){
            console.log(e)
        }
    })

    route.put('/:id',async (request,response)=>{

       // response.set('Accept', 'application/send; charset=utf-8');
        
        const {body}:any = request
        const {params}:any = request

        
        const controller = await makeUpdateAddress().handle({params:body},params.id)
     
        
        response.send(controller.data).status(controller.statusCode)

    })

    
}
   
export default addressRoute


