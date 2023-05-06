import { PartDTO } from "../Dtos/part";


export interface ICreatePartRepository{
    
    create(params:PartDTO): Promise<PartDTO> 

}