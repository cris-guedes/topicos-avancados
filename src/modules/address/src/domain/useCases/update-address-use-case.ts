import { Address } from "../entities/adress"



export type UpdateAddressUseCase ={
    
    execute(params:Partial<Address>): Promise<Address> 

}



    