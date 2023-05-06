import { CarRegistration } from "../entities/car-registration"



export type ICreateCarRegistrationUseCase ={
    
    execute(params:CarRegistration): Promise<CarRegistration> 

}



    