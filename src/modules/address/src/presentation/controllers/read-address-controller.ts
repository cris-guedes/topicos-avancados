import { AddressDTO } from "../../data/Dtos/address";
import { IReadAddressUseCase } from "../../domain/useCases";
import { Controller, HttpRequest, HttpResponse, ok, serverError } from "../../main/shared/IBaseController";
import { IUseCase } from "../../main/shared/IBaseUseCase";
import { IReadAddressController } from "../contracts/iread-address-controller";
import { AddressView } from "../view/address-view";




export class ReadAddressController implements Controller<IReadAddressController> {
  
  constructor(private readonly readAddressUseCase:IUseCase<IReadAddressUseCase>) {}

  async handle(HttpRequest:HttpRequest<Pick<AddressDTO,'id'>>): Promise<HttpResponse<AddressView>> {
    console.log(HttpRequest)
    try{
    console.log("id",HttpRequest.params.id)

    const response = await  this.readAddressUseCase.execute({params: {id:HttpRequest.params.id}})
    
    return ok(response)

  }catch(error){

    return serverError(error)

  }

  }

}