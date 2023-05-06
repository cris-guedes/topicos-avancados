import { Address } from "../entities/adress"



export type IReadAddressUseCase ={
    
    execute(params:Pick<Address,'id'>): Promise<Address> 

}



    