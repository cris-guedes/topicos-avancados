import { AddressDTO } from "../Dtos/address";


export interface IReadAddressRepository{
    
    readById(params:Pick<AddressDTO,'id'>): Promise<AddressDTO> 

}