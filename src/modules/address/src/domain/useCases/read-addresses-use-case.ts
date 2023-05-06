import { Address } from "../entities/adress"



export type IReadAddressesUseCase ={
    
    execute(): Promise<Address[]> 

}



    