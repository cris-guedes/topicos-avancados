
import { AddressDTO} from "../Dtos/address"

export interface IReadAddressesCityRepository{
    
    readByCity(params:Pick<AddressDTO,'city'>): Promise<AddressDTO[]> 

}