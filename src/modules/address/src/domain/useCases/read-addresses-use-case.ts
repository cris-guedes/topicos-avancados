import { Address } from "../entities/address"



export type IReadAddressesUseCase ={
    
    execute(): Promise<Address[]> 

}



    