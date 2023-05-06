import { IReadCarsRegistrationsUseCase } from "../../domain/useCases/read-cars-registrations-use-case";
import { IUseCase, UseCaseReturn } from "../../main/shared/IBaseUseCase";
import { CarRegistrationDTO } from "../Dtos/car-registration";
import { IReadCarsRegistrationsRepository } from "../contracts/iread-cars-registrations-repository";



export class ReadCarsRegistrationsService implements IUseCase<IReadCarsRegistrationsUseCase>{

    constructor(private readonly readCarRegistrationRepository:IReadCarsRegistrationsRepository){}
    execute():Promise<UseCaseReturn<CarRegistrationDTO[]>> {
      
        return this.readCarRegistrationRepository.read()
    }

   
    
}