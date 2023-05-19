import { Address } from "../entities/address"



export type IReadAddressesCityUseCase ={
    
    execute(): Promise<Address[]> 

}



    