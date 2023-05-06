import { CarRegistration } from "../entities/car-registration"



export type IReadCarsRegistrationsUseCase ={
    
    execute(): Promise<CarRegistration[]> 

}



    