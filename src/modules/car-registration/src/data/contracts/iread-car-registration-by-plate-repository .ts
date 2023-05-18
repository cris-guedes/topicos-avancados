import { CarRegistrationDTO } from "../Dtos/car-registration";



export interface IReadCarRegistrationByPlateRepository{
    
    readByplate(params:Pick<CarRegistrationDTO,'plate'>): Promise<CarRegistrationDTO> 

}