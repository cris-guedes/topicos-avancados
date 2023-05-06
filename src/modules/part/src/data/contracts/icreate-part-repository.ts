import { PartDTO } from "../Dtos/part";


export interface ICreatePartRepository{
    
    create(params:Omit<PartDTO,'id'>): Promise<PartDTO> 

}