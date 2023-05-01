import { ReadCardsService } from "../../data/services/read-cards-service"
import { ReadCardsRepository } from "../../infra/repositories/read-cards-repository"
import { ReadCardsController } from "../../presentation/controllers/read-cards-controller"

export const makeReadCreditCards = ()=>{
    const readCarsdRepository = new ReadCardsRepository()
    const readCardUseCase = new ReadCardsService(readCarsdRepository)
    const readCreditCardsController = new ReadCardsController(readCardUseCase)
    return readCreditCardsController
}