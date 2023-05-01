import { IReadCardsUseCase } from "../../domain/useCases/read-cards-use-case";
import { Controller, HttpResponse, ok, serverError } from "../../main/shared/IBaseController";
import { IUseCase } from "../../main/shared/IBaseUseCase";
import { IReadCardsController } from "../contracts/iread-cards-controller";
import { CardView } from "../view/card-view";




export class ReadCardsController implements Controller<IReadCardsController> {
  
  constructor(private readonly readCarsdUseCase:IUseCase<IReadCardsUseCase>) {}

  async handle(): Promise<HttpResponse<CardView[]>> {
    try{

    const response = await  this.readCarsdUseCase.execute()
    
    return ok(response)

  }catch(error){

    return serverError(error)

  }

  }

}