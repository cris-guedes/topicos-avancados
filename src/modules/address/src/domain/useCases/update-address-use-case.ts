import { Address } from "../entities/address"



export type UpdateAddressUseCase ={
    
    execute(params:Partial<Address>): Promise<Address> 

}



    