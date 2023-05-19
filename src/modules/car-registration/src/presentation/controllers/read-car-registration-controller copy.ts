import { CarRegistrationDTO } from "../../data/Dtos/car-registration"
import { IReadCarRegistrationByPlateUseCase } from "../../domain/useCases/read-car-registration-by-plate"
import { IReadCarRegistrationUseCase } from "../../domain/useCases/read-car-registration-use-case"
import { Controller, HttpResponse, ok, serverError,HttpRequest } from "../../main/shared/IBaseController"
import { IUseCase } from "../../main/shared/IBaseUseCase"
import { IReadCarRegistrationByPlateController } from "../contracts/iread-car-registration-by-plate-controller"
import { IReadCarRegistrationController } from "../contracts/iread-car-registration-controller"
import { CarRegistrationView } from "../view/car-registration"





export class ReadCarRegistrationByPlateController implements Controller<IReadCarRegistrationByPlateController> {
  
  constructor(private readonly readCarRegistrationUseCase:IUseCase<IReadCarRegistrationByPlateUseCase>) {}

  async handle(HttpRequest:HttpRequest<Pick<CarRegistrationDTO,'plate'>>): Promise<HttpResponse<CarRegistrationView>> {
    console.log(HttpRequest)
    try{

    const response = await  this.readCarRegistrationUseCase.execute({params: {id:HttpRequest.params.plate}})
    
    return ok(response)

  }catch(error){

    return serverError(error)

  }

  }

}