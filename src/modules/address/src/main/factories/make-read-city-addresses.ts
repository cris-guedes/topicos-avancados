import { ReadAddressesCityService } from "../../data/services/read-addresses-city-service"
import { ReadAddressCityRepository } from "../../infra/repositories/read-address-city-repository"
import { ReadAddressCityController } from "../../presentation/controllers/read-address-city-controllerr"


export const makeReadCityAddresses = ()=>{
    const readCarsdRepository = new ReadAddressCityRepository()
    const readAddressUseCase = new ReadAddressesCityService(readCarsdRepository)
    const readAddresssController = new  ReadAddressCityController(readAddressUseCase)
    return readAddresssController
}