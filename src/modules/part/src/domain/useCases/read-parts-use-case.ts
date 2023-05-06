import { Part } from "../entities/part"

export type IReadPartsUseCase ={
    
    execute(): Promise<Part[]> 

}



    