import { UpdateCardService } from "../../data/services/update-card-service"
import { UpdateCardRepository } from "../../infra/repositories/update-card-repository"
import { UpdateCardController } from "../../presentation/controllers/update-card-controller"

export const makeUpdateCreditCards = ()=>{
    const updateCardRepository = new UpdateCardRepository()
    const updateCardUseCase = new UpdateCardService(updateCardRepository)
    const updateCreditCardsController = new UpdateCardController(updateCardUseCase)
    return updateCreditCardsController
}