import { CardDTO} from "../Dtos/card"

export interface IUpdateCardRepository{
    
    update(params:Partial<CardDTO>): Promise<CardDTO> 

}