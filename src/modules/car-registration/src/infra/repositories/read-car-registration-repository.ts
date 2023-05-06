import { CarRegistrationDTO } from "../../data/Dtos/car-registration";
import { IReadCarRegistrationRepository } from "../../data/contracts/iread-car-registration-repository";
import { database } from "../database/database";




export class ReadCarRegistrationRepository implements IReadCarRegistrationRepository{
  
    async readById(params:Pick<CarRegistrationDTO,'id'>): Promise<CarRegistrationDTO> {
        console.log(params)
        
        return  database.readById({id:params.id})
    }
    
}