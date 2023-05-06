
import { AddressDTO} from "../Dtos/address"

export interface ICreateAddressRepository{
    
    create(params:Omit<AddressDTO,'id'>): Promise<AddressDTO> 

}