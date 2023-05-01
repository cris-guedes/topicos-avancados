
import { IReadCardsRepository } from "../../data/contracts/iread-cards-repository";
import { CardDTO } from "../../data/Dtos/card";
import { database } from "../database/database";




export class ReadCardsRepository implements IReadCardsRepository{
  
    async read(): Promise<CardDTO[]> {
        
        return  database.read()
    }
    
}