
import { ReadAddressService } from "../../data/services/read-address-service"
import { ReadAddressRepository } from "../../infra/repositories/read-address-repository"
import { ReadAddressController } from "../../presentation/controllers/read-address-controller"

export const makeReadAddress = ()=>{
    const readAddressRepository = new ReadAddressRepository()
    const readAddressUseCase = new ReadAddressService(readAddressRepository)
    const readAddressController = new ReadAddressController(readAddressUseCase)
    return readAddressController
}