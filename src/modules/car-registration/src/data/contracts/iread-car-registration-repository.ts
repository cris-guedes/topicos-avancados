import { CarRegistrationDTO } from "../Dtos/car-registration";



export interface IReadCarRegistrationRepository{
    
    readById(params:Pick<CarRegistrationDTO,'id'>): Promise<CarRegistrationDTO> 

}