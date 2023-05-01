import { CardDTO } from "../../data/Dtos/card";
import { UpdateCardUseCase } from "../../domain/useCases/update-card-use-case";
import { Controller, HttpRequest, HttpResponse, ok, serverError } from "../../main/shared/IBaseController";
import { IUseCase } from "../../main/shared/IBaseUseCase";
import { IUpdateCardController } from "../contracts/iupdate-card-controller";
import { CardView } from "../view/card-view";




export class UpdateCardController implements Controller<IUpdateCardController> {
  
  constructor(private readonly updateUseCase:IUseCase<UpdateCardUseCase>) {}

  async handle(HttpRequest:HttpRequest<CardDTO>,id:any): Promise<HttpResponse<CardView>> {
    console.log(HttpRequest)
    try{

    const response = await  this.updateUseCase.execute({params: HttpRequest.params})
    
    return ok(response)

  }catch(error){

    return serverError(error)

  }

  }

}