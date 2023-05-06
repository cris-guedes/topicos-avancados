import { IReadCarRegistrationUseCase } from "../../domain/useCases/read-car-registration-use-case"
import { IUseCase, UseCaseParams, UseCaseReturn } from "../../main/shared/IBaseUseCase"
import { CarRegistrationDTO } from "../Dtos/car-registration"
import { IReadCarRegistrationRepository } from "../contracts/iread-car-registration-repository"



export class ReadCarRegistrationService implements IUseCase<IReadCarRegistrationUseCase>{

    constructor(private readonly readCarregistrationRepository:IReadCarRegistrationRepository){}
    execute(useCaseParams: UseCaseParams<Pick<CarRegistrationDTO,'id'>>):Promise<UseCaseReturn<CarRegistrationDTO>> {
        const {params:CarregistrationId}=useCaseParams
        return this.readCarregistrationRepository.readById(CarregistrationId)
    }

   
    
}