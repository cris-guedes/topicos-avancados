
import { PartDTO } from "../../data/Dtos/part";
import { IReadPartsRepository } from "../../data/contracts/iread-parts-repository";
import { database } from "../database/database";




export class ReadPartsRepository implements IReadPartsRepository{
  
    async read(): Promise<PartDTO[]> {
        
        return  database.read()
    }
    
}