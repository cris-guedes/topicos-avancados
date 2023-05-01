
import { CardDTO} from "../Dtos/card"

export interface ICreateCardRepository{
    
    create(params:CardDTO): Promise<CardDTO> 

}