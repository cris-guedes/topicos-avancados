
import { AddressDTO} from "../Dtos/address"

export interface ICreateAddressRepository{
    
    create(params:AddressDTO): Promise<AddressDTO> 

}