import { IReadCardUseCase } from "../../domain/useCases";
import { IReadCardsUseCase } from "../../domain/useCases/read-cards-use-case";
import { IUseCase, UseCaseParams,UseCaseReturn } from "../../main/shared/IBaseUseCase";

import { IReadCardsRepository } from "../contracts/iread-cards-repository";

import { CardDTO } from "../Dtos/card";


export class ReadCardsService implements IUseCase<IReadCardsUseCase>{

    constructor(private readonly readCardRepository:IReadCardsRepository){}
    execute():Promise<UseCaseReturn<CardDTO[]>> {
      
        return this.readCardRepository.read()
    }

   
    
}