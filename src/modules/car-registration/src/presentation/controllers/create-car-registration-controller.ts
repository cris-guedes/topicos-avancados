import { ICreateCarRegistrationUseCase } from "../../domain/useCases/create-car-registration-use-case"
import { Controller, HttpResponse,HttpRequest,ok,serverError } from "../../main/shared/IBaseController"
import { ICreateCarRegistrationController } from "../contracts/icreate-car-registration-controller"
import { CarRegistrationView } from "../view/car-registration"


export class CreateCarRegistrationController implements Controller<ICreateCarRegistrationController>{
    constructor(private readonly createCarRegistrationUseCase:ICreateCarRegistrationUseCase){}
    
    async handle(HttpRequest: HttpRequest<any>): Promise<HttpResponse<CarRegistrationView>> {

        try{

            const response = await  this.createCarRegistrationUseCase.execute(HttpRequest.params)
            
            return ok(response)
        
          }catch(error){
        
            return serverError(error)
        
          }
        
          }
    

   
    
}