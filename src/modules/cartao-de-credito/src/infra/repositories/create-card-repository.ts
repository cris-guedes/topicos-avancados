import { ICreateCardRepository } from "../../data/contracts/icreate-card-repository";
import { CardDTO } from "../../data/Dtos/card";
import crypto from 'crypto';
import { database } from "../database/database";


export class CreateCardRepository implements ICreateCardRepository{
    async create(params: CardDTO): Promise<CardDTO> {
        
        
        params.id = crypto.randomUUID()
        params.holder.id = crypto.randomUUID()
        params.holder.card=[params.id]

        console.log(params)

        return database.create(params)
    } 

}