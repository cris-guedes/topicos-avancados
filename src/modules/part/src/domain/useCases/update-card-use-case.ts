import { Part } from "../entities/part"



export type UpdatePartUseCase ={
    
    execute(params:Partial<Part>): Promise<Part> 

}



    