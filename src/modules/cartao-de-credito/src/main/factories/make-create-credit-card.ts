
import { CreateCardService } from "../../data/services/create-card-service"
import { CreateCardRepository } from "../../infra/repositories/create-card-repository"
import { CreateCardController } from "../../presentation/controllers/create-card-controller"


export const makeCreateCreditCards = ()=>{
    const createCardRepository = new CreateCardRepository()
    const createCardUseCase = new CreateCardService(createCardRepository)
    const createCreditCardsController = new CreateCardController(createCardUseCase)
    return createCreditCardsController
}