import { CreatePartService } from "../../data/services/create-part-service"
import { CreatePartRepository } from "../../infra/repositories/create-part-repository"
import { CreatePartController } from "../../presentation/controllers/create-part-controller"




export const makeCreateParts = ()=>{
    const createPartRepository = new CreatePartRepository()
    const createPartUseCase = new CreatePartService(createPartRepository)
    const createPartsController = new CreatePartController(createPartUseCase)
    return createPartsController
}