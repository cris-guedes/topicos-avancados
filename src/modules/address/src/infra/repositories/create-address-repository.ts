import { ICreateAddressRepository } from "../../data/contracts/icreate-address-repository";
import type { AddressDTO } from "../../data/Dtos/address";
import crypto from 'crypto';
import { database } from "../database/database";


export class CreateAddressRepository implements ICreateAddressRepository{
    async create(params: AddressDTO): Promise<AddressDTO> {
        
        
        params.id = crypto.randomUUID().toString()
        
        console.log(params)

        return database.create(params)
    } 

}