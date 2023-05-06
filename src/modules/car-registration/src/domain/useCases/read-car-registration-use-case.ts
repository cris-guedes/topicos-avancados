import { CarRegistration } from "../entities/car-registration"


export type IReadCarRegistrationUseCase ={
    
    execute(params:Pick<CarRegistration,'id'>): Promise<CarRegistration> 

}



    