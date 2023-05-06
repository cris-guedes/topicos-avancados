import { ReadAddressesService } from "../../data/services/read-addresses-service"
import { ReadAddressesRepository } from "../../infra/repositories/read-addresses-repository"
import { ReadAddressesController } from "../../presentation/controllers/read-addresses-controller"

export const makeReadAddresses = ()=>{
    const readCarsdRepository = new ReadAddressesRepository()
    const readAddressUseCase = new ReadAddressesService(readCarsdRepository)
    const readAddresssController = new ReadAddressesController(readAddressUseCase)
    return readAddresssController
}