import { CarRegistrationDTO } from "../Dtos/car-registration";



export interface ICreateCarRegistrationRepository{
    
    create(params:CarRegistrationDTO): Promise<CarRegistrationDTO> 

}