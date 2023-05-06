
import { IReadAddressesUseCase } from "../../domain/useCases/read-addresses-use-case";
import { Controller, HttpResponse, ok, serverError } from "../../main/shared/IBaseController";
import { IUseCase } from "../../main/shared/IBaseUseCase";
import { IReadAddressesController } from "../contracts/iread-addresses-controller";

import { AddressView } from "../view/address-view";




export class ReadAddressesController implements Controller<IReadAddressesController> {
  
  constructor(private readonly readCarsdUseCase:IUseCase<IReadAddressesUseCase>) {}

  async handle(): Promise<HttpResponse<AddressView[]>> {
    try{

    const response = await  this.readCarsdUseCase.execute()
    
    return ok(response)

  }catch(error){

    return serverError(error)

  }

  }

}