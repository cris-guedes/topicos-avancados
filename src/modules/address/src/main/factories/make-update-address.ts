import { UpdateAddressService } from "../../data/services/update-address-service"
import { UpdateAddressRepository } from "../../infra/repositories/update-adress-repository"
import { UpdateAddressController } from "../../presentation/controllers/update-address-controller"


export const makeUpdateAddress = ()=>{
    const updateAddressRepository = new UpdateAddressRepository()
    const updateAddressUseCase = new UpdateAddressService(updateAddressRepository)
    const updateAddresssController = new UpdateAddressController(updateAddressUseCase)
    return updateAddresssController
}