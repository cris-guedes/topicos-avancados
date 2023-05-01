import { IReadCardRepository } from "../../data/contracts/iread-card-repository";
import { CardDTO } from "../../data/Dtos/card";
import { database } from "../database/database";




export class ReadCardRepository implements IReadCardRepository{
  
    async readById(params:Pick<CardDTO,'id'>): Promise<CardDTO> {
        console.log(params)
        
        return  database.readById({id:params})
    }
    
}