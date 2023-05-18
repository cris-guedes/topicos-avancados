import {FastifyInstance} from "fastify"

import {makeCreateParts,makeReadPart,makeReadParts,makeUpdateParts} from "../../modules/part/src"

async function partRoutes(route:FastifyInstance){
    route.get('/:id',async (request,response)=>{
        //response.set('Accept', 'text');
        
        const {params}:any = request
        
       

        const controller = await makeReadPart().handle({params})
        
        response.send(controller.data).status(controller.statusCode)
    })

    route.get('/',async (request,response)=>{
        //response.set('Accept', 'text');
        console.log("part-route")
        
        const controller = await makeReadParts().handle()
        
        response.send(controller.data).status(controller.statusCode)
    })

    route.post('/',async (request,response)=>{
        //response.set('Accept', 'application.send; charset=utf-8');
        
        const {body} = request
        console.log(body)
        
        const controller = await makeCreateParts().handle({params:body})
     
        
        response.send(controller.data).status(controller.statusCode)
    })

    route.put('/:id',async (request,response)=>{

        //response.set('Accept', 'application.send; charset=utf-8');
        
        const {body}:any = request
        const {params}:any = request

        
        const controller = await makeUpdateParts().handle({params:body},params.id)
     
        
        response.send(controller.data).status(controller.statusCode)

    })
}
   

export default partRoutes