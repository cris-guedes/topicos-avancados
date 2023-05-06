import { CarRegistration } from "../entities/car-registration"

export type UpdateCarRegistrationUseCase ={
    
    execute(params:Partial<CarRegistration>): Promise<CarRegistration> 

}



    