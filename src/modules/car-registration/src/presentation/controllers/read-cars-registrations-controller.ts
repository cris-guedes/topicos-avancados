import { IReadCarsRegistrationsUseCase } from "../../domain/useCases/read-cars-registrations-use-case"
import { Controller, HttpResponse, ok, serverError } from "../../main/shared/IBaseController"
import { IUseCase } from "../../main/shared/IBaseUseCase"
import { IReadCarsRegistrationsController } from "../contracts/iread-cars-registrationscontroller"
import { CarRegistrationView } from "../view/car-registration"



export class ReadCarsRegistrationsController implements Controller<IReadCarsRegistrationsController> {
  
  constructor(private readonly readCarsdUseCase:IUseCase<IReadCarsRegistrationsUseCase>) {}

  async handle(): Promise<HttpResponse<CarRegistrationView[]>> {
    try{

    const response = await  this.readCarsdUseCase.execute()
    
    return ok(response)

  }catch(error){

    return serverError(error)

  }

  }

}