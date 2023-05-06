import { CarRegistrationDTO } from "../Dtos/car-registration";



export interface ICreateCarRegistrationRepository{
    
    create(params:Omit<CarRegistrationDTO,'id'>): Promise<CarRegistrationDTO> 

}