import { ReadCardService } from "../../data/services/read-card-service"
import { ReadCardRepository } from "../../infra/repositories/read-card-repository"
import { ReadCardController } from "../../presentation/controllers/read-card-controller"

export const makeReadCreditCard = ()=>{
    const readCardRepository = new ReadCardRepository()
    const readCardUseCase = new ReadCardService(readCardRepository)
    const readCreditCardController = new ReadCardController(readCardUseCase)
    return readCreditCardController
}