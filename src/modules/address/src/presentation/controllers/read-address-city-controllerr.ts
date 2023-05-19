import { AddressDTO } from "../../data/Dtos/address";
import { IReadAddressUseCase } from "../../domain/useCases";
import { Controller, HttpRequest, HttpResponse, ok, serverError } from "../../main/shared/IBaseController";
import { IUseCase } from "../../main/shared/IBaseUseCase";
import { IReadAddressCityController } from "../contracts/iread-address-city-controller";
import { IReadAddressController } from "../contracts/iread-address-controller";
import { AddressView } from "../view/address-view";




export class ReadAddressCityController implements Controller<IReadAddressCityController> {
  
  constructor(private readonly readAddressUseCase:IUseCase<IReadAddressUseCase>) {}

  async handle(HttpRequest:HttpRequest<Pick<AddressDTO,'city'>>): Promise<HttpResponse<AddressView>> {
    console.log(HttpRequest)
    try{
    console.log("id",HttpRequest.params.city)

    const response = await  this.readAddressUseCase.execute({params: {city:HttpRequest.params.city}})
    
    return ok(response)

  }catch(error){

    return serverError(error)

  }

  }

}