import { ReadCarRegistrationByPlateService } from "../../data/services/read-car-registration-by-plate"
import { ReadCarRegistrationByPlateRepository } from "../../infra/repositories/read-car-registration-by-plate"
import { ReadCarRegistrationByPlateController } from "../../presentation/controllers/read-car-registration-controller copy"

export const makeReadCarRegistrationByPlate = ()=>{
    const readCarRegistrationRepository = new ReadCarRegistrationByPlateRepository()
    const readCarRegistrationUseCase = new ReadCarRegistrationByPlateService(readCarRegistrationRepository)
    const readCarRegistrationController = new ReadCarRegistrationByPlateController(readCarRegistrationUseCase)
    return readCarRegistrationController
}