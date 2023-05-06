import { ICreateAddressUseCase } from "../../domain/useCases/create-address-use-case";
import { CreateAddressRepository } from "../../infra/repositories/create-address-repository";
import { AddressDTO } from "../Dtos/address";

export class CreateAddressService implements ICreateAddressUseCase{
    constructor(private readonly createAddressRepository:CreateAddressRepository){}
    execute(params: AddressDTO): Promise<AddressDTO> {
      return this.createAddressRepository.create(params)
    }


}