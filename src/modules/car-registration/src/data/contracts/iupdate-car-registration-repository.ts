import { CarRegistrationDTO } from "../Dtos/car-registration";


export interface IUpdateCarRegistrationRepository{
    
    update(params:Partial<CarRegistrationDTO>): Promise<CarRegistrationDTO> 

}