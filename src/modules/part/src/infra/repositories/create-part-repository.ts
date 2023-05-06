import crypto from 'crypto';
import { database } from "../database/database";
import { PartDTO } from '../../data/Dtos/part';
import { ICreatePartRepository } from '../../data/contracts/icreate-part-repository';


export class CreatePartRepository implements ICreatePartRepository{
    async create(params: PartDTO): Promise<PartDTO> {
        params.id = crypto.randomUUID()      
        return database.create(params)
    } 

}