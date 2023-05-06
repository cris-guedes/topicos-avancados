

import { AddressDTO } from "../../data/Dtos/address";
import { IReadAddressesRepository } from "../../data/contracts/iread-addresses-repository";
import { database } from "../database/database";




export class ReadAddressesRepository implements IReadAddressesRepository{
  
    async read(): Promise<AddressDTO[]> {
        
        return  database.read()
    }
    
}