import { AddressDTO } from "../../data/Dtos/address";
import { UpdateAddressUseCase } from "../../domain/useCases/update-address-use-case";
import { Controller, HttpRequest, HttpResponse, ok, serverError } from "../../main/shared/IBaseController";
import { IUseCase } from "../../main/shared/IBaseUseCase";
import { IUpdateAddressController } from "../contracts/iupdate-address-controller";
import { AddressView } from "../view/address-view";




export class UpdateAddressController implements Controller<IUpdateAddressController> {
  
  constructor(private readonly updateUseCase:IUseCase<UpdateAddressUseCase>) {}

  async handle(HttpRequest:HttpRequest<AddressDTO>,id:any): Promise<HttpResponse<AddressView>> {
    console.log(HttpRequest)
    try{

    const response = await  this.updateUseCase.execute({params:{...HttpRequest.params,id}})
    
    return ok(response)

  }catch(error){

    return serverError(error)

  }

  }

}