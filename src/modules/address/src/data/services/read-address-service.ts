import { IReadAddressUseCase } from "../../domain/useCases";
import { IUseCase, UseCaseParams,UseCaseReturn } from "../../main/shared/IBaseUseCase";
import { IReadAddressRepository } from '../contracts/iread-address-repository';
import { AddressDTO } from "../Dtos/address";


export class ReadAddressService implements IUseCase<IReadAddressUseCase>{

    constructor(private readonly readAddressRepository:IReadAddressRepository){}
    execute(useCaseParams: UseCaseParams<Pick<AddressDTO,'id'>>):Promise<UseCaseReturn<AddressDTO>> {
        const {params:addressId}=useCaseParams
        return this.readAddressRepository.readById(addressId)
    }

   
    
}