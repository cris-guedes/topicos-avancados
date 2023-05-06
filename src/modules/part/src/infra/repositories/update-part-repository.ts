import { PartDTO } from "../../data/Dtos/part";
import { IUpdatePartRepository } from "../../data/contracts/iupdate-part-repository";
import { database } from "../database/database";


export class UpdatePartRepository implements IUpdatePartRepository{
    update(params: PartDTO): Promise<PartDTO> {
        return database.update(params)
    }
}