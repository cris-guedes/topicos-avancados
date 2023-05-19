import { IReadCarRegistrationByPlateUseCase } from "../../domain/useCases/read-car-registration-by-plate"

import { IUseCase, UseCaseParams, UseCaseReturn } from "../../main/shared/IBaseUseCase"
import { CarRegistrationDTO } from "../Dtos/car-registration"
import { IReadCarRegistrationByPlateRepository } from "../contracts/iread-car-registration-by-plate-repository "




export class ReadCarRegistrationByPlateService implements IUseCase<IReadCarRegistrationByPlateUseCase>{

    constructor(private readonly readCarregistrationRepository:IReadCarRegistrationByPlateRepository){}
    execute(useCaseParams: UseCaseParams<Pick<CarRegistrationDTO,'plate'>>):Promise<UseCaseReturn<CarRegistrationDTO>> {
        const {params:CarregistrationId}=useCaseParams
        return this.readCarregistrationRepository.readByplate(CarregistrationId)
    }

   
    
}