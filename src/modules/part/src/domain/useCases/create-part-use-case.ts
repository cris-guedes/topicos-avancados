import { Part } from "../entities/part"


export type ICreatePartUseCase ={
    
    execute(params:Part): Promise<Part> 

}



    