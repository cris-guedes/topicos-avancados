import { IReadAddressRepository } from "../../data/contracts/iread-address-repository";
import { IReadAddressesCityRepository } from "../../data/contracts/iread-addresses-city-repository";
import { AddressDTO } from "../../data/Dtos/address";
import { database } from "../database/database";




export class ReadAddressCityRepository implements  IReadAddressesCityRepository{
  
    async readByCity(params:Pick<AddressDTO,'city'>): Promise<AddressDTO[]> {
        console.log(params)
        
        return  database.readByCity({city:params.city})
    }
    
}