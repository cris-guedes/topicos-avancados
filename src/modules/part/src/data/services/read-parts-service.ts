import { IReadPartsUseCase } from "../../domain/useCases/read-parts-use-case";
import { IUseCase, UseCaseReturn } from "../../main/shared/IBaseUseCase";
import { PartDTO } from "../Dtos/part";
import { IReadPartsRepository } from "../contracts/iread-parts-repository";


export class ReadPartsService implements IUseCase<IReadPartsUseCase>{

    constructor(private readonly readAddressRepository:IReadPartsRepository){}
    execute():Promise<UseCaseReturn<PartDTO[]>> {
      
        return this.readAddressRepository.read()
    }

   
    
}