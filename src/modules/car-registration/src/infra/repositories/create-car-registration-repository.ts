
import crypto from 'crypto';
import { database } from "../database/database";
import { ICreateCarRegistrationRepository } from '../../data/contracts/icreate-car-registration-repository';
import { CarRegistrationDTO } from '../../data/Dtos/car-registration';


export class CreateCarRegistrationRepository implements ICreateCarRegistrationRepository{
    async create(params: CarRegistrationDTO): Promise<CarRegistrationDTO> {
        
        
        params.id = crypto.randomUUID()
       
        return database.create(params)
    } 

}