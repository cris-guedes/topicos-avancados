
import { CardDTO} from "../Dtos/card"

export interface IReadCardRepository{
    
    readById(params:Pick<CardDTO,'id'>): Promise<CardDTO> 

}