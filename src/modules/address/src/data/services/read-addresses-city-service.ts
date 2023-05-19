import { IUseCase, UseCaseParams, UseCaseReturn } from "../../main/shared/IBaseUseCase";
import { AddressDTO } from "../Dtos/address";
import { IReadAddressesCityRepository } from "../contracts/iread-addresses-city-repository";



export class ReadAddressesCityService implements IUseCase<IReadAddressesCityRepository>{

    constructor(private readonly readAddressRepository:IReadAddressesCityRepository){}
    execute(useCaseParams: UseCaseParams<Pick<AddressDTO,'city'>>):Promise<UseCaseReturn<AddressDTO[]>> {
        const {params:city}=useCaseParams
        return this.readAddressRepository.readByCity(city)
    }

   
    
}