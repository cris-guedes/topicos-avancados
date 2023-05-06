import { Address } from "../entities/address"



export type IReadAddressUseCase ={
    
    execute(params:Pick<Address,'id'>): Promise<Address> 

}



    