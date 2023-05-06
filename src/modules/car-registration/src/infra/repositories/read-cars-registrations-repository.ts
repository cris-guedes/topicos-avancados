import { CarRegistrationDTO } from "../../data/Dtos/car-registration";
import { IReadCarsRegistrationsRepository } from "../../data/contracts/iread-cars-registrations-repository";
import { database } from "../database/database";




export class ReadCarsRegistrationsRepository implements IReadCarsRegistrationsRepository{
  
    async read(): Promise<CarRegistrationDTO[]> {
        
        return  database.read()
    }
    
}