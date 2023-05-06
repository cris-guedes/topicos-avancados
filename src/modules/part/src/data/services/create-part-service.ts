import { ICreatePartUseCase } from "../../domain/useCases/create-part-use-case";
import { PartDTO } from "../Dtos/part";
import { ICreatePartRepository } from "../contracts/icreate-part-repository";


export class CreatePartService implements ICreatePartUseCase{
    constructor(private readonly createPartRepository:ICreatePartRepository){}
    execute(params: PartDTO): Promise<PartDTO> {
    
      return this.createPartRepository.create(params)
    }


}