
import { CarRegistrationDTO } from "../../data/Dtos/car-registration";
import { IUpdateCarRegistrationRepository } from "../../data/contracts/iupdate-car-registration-repository";
import { database } from "../database/database";



export class UpdateCarRegistrationRepository implements IUpdateCarRegistrationRepository{
    update(params: CarRegistrationDTO): Promise<CarRegistrationDTO> {
        return database.update(params)
    }
   

}