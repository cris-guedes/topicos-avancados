import { PartDTO } from "../../data/Dtos/part"
import { IReadPartUseCase } from "../../domain/useCases"
import { Controller, HttpResponse, HttpRequest,ok,serverError } from "../../main/shared/IBaseController"
import { IUseCase } from "../../main/shared/IBaseUseCase"
import { IReadPartController } from "../contracts/iread-part-controller"
import { PartView } from "../view/part-view"




export class ReadPartController implements Controller<IReadPartController> {
  
  constructor(private readonly readPartUseCase:IUseCase<IReadPartUseCase>) {}

  async handle(HttpRequest:HttpRequest<Pick<PartDTO,'id'>>): Promise<HttpResponse<PartView>> {
    console.log(HttpRequest)
    try{

    const response = await  this.readPartUseCase.execute({params: {id:HttpRequest.params.id}})
    
    return ok(response)

  }catch(error){

    return serverError(error)

  }

  }

}