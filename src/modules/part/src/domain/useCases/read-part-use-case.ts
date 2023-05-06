import { Part } from "../entities/part"



export type IReadPartUseCase ={
    
    execute(params:Pick<Part,'id'>): Promise<Part> 

}



    