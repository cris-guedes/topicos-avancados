import { CarRegistration } from "../entities/car-registration"


export type IReadCarRegistrationByPlateUseCase ={
    
    execute(params:Pick<CarRegistration,'plate'>): Promise<CarRegistration> 

}



    