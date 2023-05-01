import { ICreateCardUseCase } from "../../domain/useCases/create-card-use-case";
import { CreateCardRepository } from "../../infra/repositories/create-card-repository";
import { CardDTO } from "../Dtos/card";

export class CreateCardService implements ICreateCardUseCase{
    constructor(private readonly createCardRepository:CreateCardRepository){}
    execute(params: CardDTO): Promise<CardDTO> {
      return this.createCardRepository.create(params)
    }


}