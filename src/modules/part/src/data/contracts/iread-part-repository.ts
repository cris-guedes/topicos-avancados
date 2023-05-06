import { PartDTO } from "../Dtos/part";



export interface IReadPartRepository{
    
    readById(params:Pick<PartDTO,'id'>): Promise<PartDTO> 

}

