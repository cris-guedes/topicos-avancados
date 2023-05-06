import { CreateCarRegistrationService } from "../../data/services/create-car-registration-service"
import { CreateCarRegistrationRepository } from "../../infra/repositories/create-car-registration-repository"
import { CreateCarRegistrationController } from "../../presentation/controllers/create-car-registration-controller"




export const makeCreateCarRegistrations = ()=>{
    const createCarRegistrationRepository = new CreateCarRegistrationRepository()
    const createCarRegistrationUseCase = new CreateCarRegistrationService(createCarRegistrationRepository)
    const createCarRegistrationsController = new CreateCarRegistrationController(createCarRegistrationUseCase)
    return createCarRegistrationsController
}