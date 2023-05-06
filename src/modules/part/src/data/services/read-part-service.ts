import { IReadPartUseCase } from "../../domain/useCases"
import { IUseCase, UseCaseParams, UseCaseReturn } from "../../main/shared/IBaseUseCase"
import { PartDTO } from "../Dtos/part"
import { IReadPartRepository } from "../contracts/iread-part-repository"




export class ReadPartService implements IUseCase<IReadPartUseCase>{

    constructor(private readonly readPartRepository:IReadPartRepository){}
    execute(useCaseParams: UseCaseParams<Pick<PartDTO,'id'>>):Promise<UseCaseReturn<PartDTO>> {
        const {params:PartId}=useCaseParams
        return this.readPartRepository.readById(PartId)
    }

   
    
}