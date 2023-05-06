
import { AddressDTO } from "../../data/Dtos/address";
import { IUpdateAddressRepository } from "../../data/contracts/iupdate-address-repository";
import { database } from "../database/database";



export class UpdateAddressRepository implements IUpdateAddressRepository{
    update(params: AddressDTO): Promise<AddressDTO> {
        return database.update(params)
    }
   

}