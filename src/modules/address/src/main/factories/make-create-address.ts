

import { CreateAddressService } from "../../data/services/create-address-service"
import { CreateAddressRepository } from "../../infra/repositories/create-address-repository"
import { CreateAddressController } from "../../presentation/controllers/create-address-controller"


export const makeCreateAddress = ()=>{
    const createAddressRepository = new CreateAddressRepository()
    const createAddressUseCase = new CreateAddressService(createAddressRepository)
    const createAddresssController = new CreateAddressController(createAddressUseCase)
    return createAddresssController
}