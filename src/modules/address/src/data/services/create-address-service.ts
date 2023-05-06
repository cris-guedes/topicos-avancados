import { Address } from "../../domain/entities";
import { ICreateAddressUseCase } from "../../domain/useCases/create-address-use-case";
import { AddressDTO } from "../Dtos/address";
import { ICreateAddressRepository } from "../contracts/icreate-address-repository";

export class CreateAddressService implements ICreateAddressUseCase{
    constructor(private readonly createAddressRepository:ICreateAddressRepository){}
    execute(params: AddressDTO): Promise<AddressDTO> {
      const address: Address = params  
      return this.createAddressRepository.create(address)
    }


}