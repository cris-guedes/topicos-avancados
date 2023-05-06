import { UpdateCarRegistrationService } from "../../data/services/update-car-registration-service"
import { UpdateCarRegistrationRepository } from "../../infra/repositories/update-car-registration-repository"
import { UpdateCarRegistrationController } from "../../presentation/controllers/update-car-registration-controller"


export const makeUpdateCarRegistrations = ()=>{
    const updateCarRegistrationRepository = new UpdateCarRegistrationRepository()
    const updateCarRegistrationUseCase = new UpdateCarRegistrationService(updateCarRegistrationRepository)
    const updateCreditCarRegistrationsController = new UpdateCarRegistrationController(updateCarRegistrationUseCase)
    return updateCreditCarRegistrationsController
}