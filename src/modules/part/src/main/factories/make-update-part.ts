import { UpdatePartService } from "../../data/services/update-part-service"
import { UpdatePartRepository } from "../../infra/repositories/update-part-repository"
import { UpdatePartController } from "../../presentation/controllers/update-part-controller"

export const makeUpdateParts = ()=>{
    const updatePartRepository = new UpdatePartRepository()
    const updatePartUseCase = new UpdatePartService(updatePartRepository)
    const updatePartsController = new UpdatePartController(updatePartUseCase)
    return updatePartsController
}