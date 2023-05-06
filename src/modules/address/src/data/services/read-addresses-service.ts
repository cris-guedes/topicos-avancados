import { IUseCase, UseCaseReturn } from "../../main/shared/IBaseUseCase";
import { AddressDTO } from "../Dtos/address";
import { IReadAddressesRepository } from "../contracts/iread-addresses-repository";


export class ReadAddressesService implements IUseCase<ReadAddressesService>{

    constructor(private readonly readAddressRepository:IReadAddressesRepository){}
    execute():Promise<UseCaseReturn<AddressDTO[]>> {
      
        return this.readAddressRepository.read()
    }

   
    
}