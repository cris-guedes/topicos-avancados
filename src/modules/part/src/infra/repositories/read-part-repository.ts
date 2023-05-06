
import { PartDTO } from "../../data/Dtos/part";
import { IReadPartRepository } from "../../data/contracts/iread-part-repository";
import { database } from "../database/database";




export class ReadPartRepository implements IReadPartRepository{
  
    async readById(params:Pick<PartDTO,'id'>): Promise<PartDTO> {
        console.log(params)
        
        return  database.readById({id:params.id})
    }
    
}