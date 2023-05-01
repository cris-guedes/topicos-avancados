
import { CardDTO} from "../Dtos/card"

export interface IReadCardsRepository{
    
    read(): Promise<CardDTO[]> 

}