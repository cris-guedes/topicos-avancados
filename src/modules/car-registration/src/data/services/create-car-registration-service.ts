import { ICreateCarRegistrationUseCase } from "../../domain/useCases/create-car-registration-use-case";
import { CreateCarRegistrationRepository } from "../../infra/repositories/create-car-registration-repository";
import { CarRegistrationDTO } from "../Dtos/car-registration";


export class CreateCarRegistrationService implements ICreateCarRegistrationUseCase{
    constructor(private readonly createCarRegistrationRepository:CreateCarRegistrationRepository){}
    execute(params: CarRegistrationDTO): Promise<CarRegistrationDTO> {
      return this.createCarRegistrationRepository.create(params)
    }


}