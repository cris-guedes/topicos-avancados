import { AddressDTO } from "../../data/Dtos/address";
import { ICreateAddressUseCase } from "../../domain/useCases/create-address-use-case";
import { Controller, HttpRequest, HttpResponse, ok, serverError } from "../../main/shared/IBaseController";
import { ICreateAddressController } from "../contracts/icreate-address-controller";
import { AddressView } from "../view/address-view";


export class CreateAddressController implements Controller<ICreateAddressController>{
    constructor(private readonly createAddressUseCase:ICreateAddressUseCase){}
    
    async handle(HttpRequest: HttpRequest<any>): Promise<HttpResponse<AddressView>> {

        try{

            const response = await  this.createAddressUseCase.execute(HttpRequest.params)
            
            return ok(response)
        
          }catch(error){
        
            return serverError(error)
        
          }
        
          }
    

   
    
}