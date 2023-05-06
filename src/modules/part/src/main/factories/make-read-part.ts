import { ReadPartsService } from "../../data/services/read-parts-service"
import { ReadPartsRepository } from "../../infra/repositories/read-parts-repository"
import { ReadPartsController } from "../../presentation/controllers/read-parts-controller"


export const makeReadPart = ()=>{
    const readPartsRepository = new ReadPartsRepository()
    const readPartsUseCase = new ReadPartsService(readPartsRepository)
    const readPartsController = new ReadPartsController(readPartsUseCase)
    return readPartsController
}