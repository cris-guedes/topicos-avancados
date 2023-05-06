import { UpdateAddressUseCase } from "../../domain/useCases/update-address-use-case";
import { IUseCase, UseCaseParams,UseCaseReturn } from "../../main/shared/IBaseUseCase";
import { AddressDTO } from "../Dtos/address";
import { IUpdateAddressRepository } from "../contracts/iupdate-address-repository";


export class UpdateAddressService implements IUseCase<UpdateAddressUseCase>{

    constructor(private readonly updateAddressRepository:IUpdateAddressRepository){}
    execute(useCaseParams: UseCaseParams<Partial<AddressDTO>>):Promise<UseCaseReturn<AddressDTO>> {
        const {params}=useCaseParams
        console.log(params)
        return this.updateAddressRepository.update(params)
    }

   
    
}