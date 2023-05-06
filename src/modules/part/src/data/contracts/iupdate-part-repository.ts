import { PartDTO } from "../Dtos/part"

export interface IUpdatePartRepository{
    
    update(params:Partial<PartDTO>): Promise<PartDTO> 

}