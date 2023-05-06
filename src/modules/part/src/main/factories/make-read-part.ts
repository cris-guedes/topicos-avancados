import { ReadPartService } from "../../data/services/read-part-service"
import { ReadPartRepository } from "../../infra/repositories/read-part-repository"
import { ReadPartController } from "../../presentation/controllers/read-part-controller"



export const makeReadPart = ()=>{
    const readPartsRepository = new ReadPartRepository()
    const readPartsUseCase = new ReadPartService(readPartsRepository)
    const readPartsController = new ReadPartController(readPartsUseCase)
    return readPartsController
}