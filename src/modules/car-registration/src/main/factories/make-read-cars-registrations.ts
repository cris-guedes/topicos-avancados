import { ReadCarsRegistrationsService } from "../../data/services/read-cars-registrations-service"
import { ReadCarsRegistrationsRepository } from "../../infra/repositories/read-cars-registrations-repository"
import { ReadCarsRegistrationsController } from "../../presentation/controllers/read-cars-registrations-controller"

export const makeReadCarRegistrations = ()=>{
    const readCarsdRepository = new ReadCarsRegistrationsRepository()
    const readCarRegistrationUseCase = new ReadCarsRegistrationsService(readCarsdRepository)
    const readCarRegistrationsController = new ReadCarsRegistrationsController(readCarRegistrationUseCase)
    return readCarRegistrationsController
}