import { IReadCardUseCase } from "../../domain/useCases";
import { IUseCase, UseCaseParams,UseCaseReturn } from "../../main/shared/IBaseUseCase";
import { IReadCardRepository } from '../contracts/iread-card-repository';
import { CardDTO } from "../Dtos/card";


export class ReadCardService implements IUseCase<IReadCardUseCase>{

    constructor(private readonly readCardRepository:IReadCardRepository){}
    execute(useCaseParams: UseCaseParams<Pick<CardDTO,'id'>>):Promise<UseCaseReturn<CardDTO>> {
        const {params:cardId}=useCaseParams
        return this.readCardRepository.readById(cardId)
    }

   
    
}