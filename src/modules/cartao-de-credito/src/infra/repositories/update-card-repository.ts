import { IUpdateCardRepository } from "../../data/contracts/iupdate-card-repository";
import { CardDTO } from "../../data/Dtos/card";
import { database } from "../database/database";



export class UpdateCardRepository implements IUpdateCardRepository{
    update(params: CardDTO): Promise<CardDTO> {
        return database.update(params)
    }
   

}