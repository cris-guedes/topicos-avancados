import { IReadAddressRepository } from "../../data/contracts/iread-address-repository";
import { AddressDTO } from "../../data/Dtos/address";
import { database } from "../database/database";




export class ReadAddressRepository implements IReadAddressRepository{
  
    async readById(params:Pick<AddressDTO,'id'>): Promise<AddressDTO> {
        console.log(params)
        
        return  database.readById({id:params.id})
    }
    
}