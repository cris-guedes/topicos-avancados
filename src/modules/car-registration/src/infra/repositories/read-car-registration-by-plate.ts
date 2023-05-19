import { CarRegistrationDTO } from "../../data/Dtos/car-registration";
import { IReadCarRegistrationByPlateRepository } from "../../data/contracts/iread-car-registration-by-plate-repository ";

import { database } from "../database/database";




export class ReadCarRegistrationByPlateRepository implements IReadCarRegistrationByPlateRepository{
    readByplate(params: Pick<CarRegistrationDTO, "plate">): Promise<CarRegistrationDTO> {
        return  database.readByPlate({plate:params.plate})
    }
  
    
}