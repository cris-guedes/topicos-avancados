import { CarRegistrationDTO } from "../../data/Dtos/car-registration"
import { IReadCarRegistrationUseCase } from "../../domain/useCases/read-car-registration-use-case"
import { Controller, HttpResponse, ok, serverError,HttpRequest } from "../../main/shared/IBaseController"
import { IUseCase } from "../../main/shared/IBaseUseCase"
import { IReadCarRegistrationController } from "../contracts/iread-car-registration-controller"
import { CarRegistrationView } from "../view/car-registration"





export class ReadCarRegistrationController implements Controller<IReadCarRegistrationController> {
  
  constructor(private readonly readCarRegistrationUseCase:IUseCase<IReadCarRegistrationUseCase>) {}

  async handle(HttpRequest:HttpRequest<Pick<CarRegistrationDTO,'id'>>): Promise<HttpResponse<CarRegistrationView>> {
    console.log(HttpRequest)
    try{

    const response = await  this.readCarRegistrationUseCase.execute({params: {id:HttpRequest.params.id}})
    
    return ok(response)

  }catch(error){

    return serverError(error)

  }

  }

}