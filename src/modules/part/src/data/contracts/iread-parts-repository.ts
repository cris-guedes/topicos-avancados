import { PartDTO } from "../Dtos/part";


export interface IReadPartsRepository{
    
    read(): Promise<PartDTO[]> 

}