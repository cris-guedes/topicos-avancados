import { AddressDTO} from "../Dtos/address"

export interface IUpdateAddressRepository{
    
    update(params:Partial<AddressDTO>): Promise<AddressDTO> 

}