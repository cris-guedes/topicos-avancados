import { UpdatePartUseCase } from "../../domain/useCases/update-card-use-case"
import { IUseCase, UseCaseParams, UseCaseReturn } from "../../main/shared/IBaseUseCase"
import { PartDTO } from "../Dtos/part"
import { IUpdatePartRepository } from "../contracts/iupdate-part-repository"



export class UpdatePartService implements IUseCase<UpdatePartUseCase>{

    constructor(private readonly updatePartRepository:IUpdatePartRepository){}
    execute(useCaseParams: UseCaseParams<Partial<PartDTO>>):Promise<UseCaseReturn<PartDTO>> {
        const {params}=useCaseParams
        return this.updatePartRepository.update(params)
    }

   
    
}