import { PartDTO } from "../../data/Dtos/part"
import { UpdatePartUseCase } from "../../domain/useCases/update-card-use-case"
import { Controller, HttpResponse,HttpRequest,ok,serverError } from "../../main/shared/IBaseController"
import { IUseCase } from "../../main/shared/IBaseUseCase"
import { IUpdatePartController } from "../contracts/iupdate-part-controller"
import { PartView } from "../view/part-view"




export class UpdatePartController implements Controller<IUpdatePartController> {
  
  constructor(private readonly updateUseCase:IUseCase<UpdatePartUseCase>) {}

  async handle(HttpRequest:HttpRequest<PartDTO>,id:any): Promise<HttpResponse<PartView>> {
    console.log(HttpRequest)
    try{

    const response = await  this.updateUseCase.execute({params:{...HttpRequest.params,id}})
    
    return ok(response)

  }catch(error){

    return serverError(error)

  }

  }

}