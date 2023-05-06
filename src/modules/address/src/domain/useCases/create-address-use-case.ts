import { Address } from "../entities/address"


export type ICreateAddressUseCase ={
    
    execute(params:Address): Promise<Address> 

}



    