import { ReadCarRegistrationService } from "../../data/services/read-car-registration-service"
import { ReadCarRegistrationRepository } from "../../infra/repositories/read-car-registration-repository"
import { ReadCarRegistrationController } from "../../presentation/controllers/read-car-registration-controller"

export const makeReadCarRegistration = ()=>{
    const readCarRegistrationRepository = new ReadCarRegistrationRepository()
    const readCarRegistrationUseCase = new ReadCarRegistrationService(readCarRegistrationRepository)
    const readCarRegistrationController = new ReadCarRegistrationController(readCarRegistrationUseCase)
    return readCarRegistrationController
}