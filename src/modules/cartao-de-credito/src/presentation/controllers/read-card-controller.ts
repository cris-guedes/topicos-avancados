import { CardDTO } from "../../data/Dtos/card";
import { IReadCardUseCase } from "../../domain/useCases";
import { Controller, HttpRequest, HttpResponse, ok, serverError } from "../../main/shared/IBaseController";
import { IUseCase } from "../../main/shared/IBaseUseCase";
import { IReadCardController } from "../contracts/iread-card-controller";
import { CardView } from "../view/card-view";




export class ReadCardController implements Controller<IReadCardController> {
  
  constructor(private readonly readCardUseCase:IUseCase<IReadCardUseCase>) {}

  async handle(HttpRequest:HttpRequest<Pick<CardDTO,'id'>>): Promise<HttpResponse<CardView>> {
    console.log(HttpRequest)
    try{

    const response = await  this.readCardUseCase.execute({params: HttpRequest.params.id})
    
    return ok(response)

  }catch(error){

    return serverError(error)

  }

  }

}