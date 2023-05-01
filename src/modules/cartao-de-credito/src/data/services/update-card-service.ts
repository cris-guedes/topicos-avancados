import { IReadCardUseCase } from "../../domain/useCases";
import { UpdateCardUseCase } from "../../domain/useCases/update-card-use-case";
import { IUseCase, UseCaseParams,UseCaseReturn } from "../../main/shared/IBaseUseCase";
import { IReadCardRepository } from '../contracts/iread-card-repository';
import { IUpdateCardRepository } from "../contracts/iupdate-card-repository";
import { CardDTO } from "../Dtos/card";


export class UpdateCardService implements IUseCase<UpdateCardUseCase>{

    constructor(private readonly updateCardRepository:IUpdateCardRepository){}
    execute(useCaseParams: UseCaseParams<Partial<CardDTO>>):Promise<UseCaseReturn<CardDTO>> {
        const {params}=useCaseParams
        return this.updateCardRepository.update(params)
    }

   
    
}