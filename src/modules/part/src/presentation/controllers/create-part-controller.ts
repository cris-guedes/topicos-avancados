import { ICreatePartUseCase } from "../../domain/useCases/create-part-use-case"
import { Controller, HttpResponse,HttpRequest,ok,serverError } from "../../main/shared/IBaseController"
import { ICreatePartController } from "../contracts/icreate-part-controller"
import { PartView } from "../view/part-view"



export class CreatePartController implements Controller<ICreatePartController>{
    constructor(private readonly createPartUseCase:ICreatePartUseCase){}
    
    async handle(HttpRequest: HttpRequest<any>): Promise<HttpResponse<PartView>> {

        try{

            const response = await  this.createPartUseCase.execute(HttpRequest.params)
            
            return ok(response)
        
          }catch(error){
        
            return serverError(error)
        
          }
        
          }
    

   
    
}