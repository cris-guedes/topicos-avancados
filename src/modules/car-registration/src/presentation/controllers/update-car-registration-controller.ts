import { CarRegistrationDTO } from "../../data/Dtos/car-registration"
import { UpdateCarRegistrationUseCase } from "../../domain/useCases/update-car-registration-use-case"
import { Controller, HttpResponse, ok, serverError,HttpRequest } from "../../main/shared/IBaseController"
import { IUseCase } from "../../main/shared/IBaseUseCase"
import { IUpdateCarRegistrationController } from "../contracts/iupdate-car-registration-controller"




export class UpdateCarRegistrationController implements Controller<IUpdateCarRegistrationController> {
  
  constructor(private readonly updateUseCase:IUseCase<UpdateCarRegistrationUseCase>) {}

  async handle(HttpRequest:HttpRequest<CarRegistrationDTO>,id:any): Promise<HttpResponse<CarRegistrationDTO>> {
    console.log(HttpRequest)
    try{

    const response = await  this.updateUseCase.execute({params:{...HttpRequest.params,id}})
    
    return ok(response)

  }catch(error){

    return serverError(error)

  }

  }

}