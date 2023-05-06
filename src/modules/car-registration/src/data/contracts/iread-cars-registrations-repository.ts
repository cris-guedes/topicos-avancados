import { CarRegistrationDTO } from "../Dtos/car-registration";


export interface IReadCarsRegistrationsRepository{
    
    read(): Promise<CarRegistrationDTO[]> 

}