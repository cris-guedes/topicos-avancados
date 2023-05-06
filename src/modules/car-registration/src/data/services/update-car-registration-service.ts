import { UpdateCarRegistrationUseCase } from "../../domain/useCases/update-car-registration-use-case"
import { IUseCase, UseCaseParams, UseCaseReturn } from "../../main/shared/IBaseUseCase"
import { CarRegistrationDTO } from "../Dtos/car-registration"
import { IUpdateCarRegistrationRepository } from "../contracts/iupdate-car-registration-repository"



export class UpdateCarRegistrationService implements IUseCase<UpdateCarRegistrationUseCase>{

    constructor(private readonly updateCarRegistrationRepository:IUpdateCarRegistrationRepository){}
    execute(useCaseParams: UseCaseParams<Partial<CarRegistrationDTO>>):Promise<UseCaseReturn<CarRegistrationDTO>> {
        const {params}=useCaseParams
        return this.updateCarRegistrationRepository.update(params)
    }

   
    
}