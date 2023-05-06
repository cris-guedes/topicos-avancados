
import { AddressDTO} from "../Dtos/address"

export interface IReadAddressesRepository{
    
    read(): Promise<AddressDTO[]> 

}