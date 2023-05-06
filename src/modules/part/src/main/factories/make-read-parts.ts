import { ReadPartsService } from "../../data/services/read-parts-service"
import { ReadPartsRepository } from "../../infra/repositories/read-parts-repository"
import { ReadPartsController } from "../../presentation/controllers/read-parts-controller"

export const makeReadParts = ()=>{
    const readCarsdRepository = new ReadPartsRepository()
    const readPartUseCase = new ReadPartsService(readCarsdRepository)
    const readPartsController = new ReadPartsController(readPartUseCase)
    return readPartsController
}