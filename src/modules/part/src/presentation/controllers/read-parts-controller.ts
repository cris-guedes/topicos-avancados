import { IReadPartsUseCase } from "../../domain/useCases/read-parts-use-case"
import { Controller, HttpResponse,ok,serverError } from "../../main/shared/IBaseController"
import { IUseCase } from "../../main/shared/IBaseUseCase"
import { IReadPartsController } from "../contracts/iread-parts-controller"
import { PartView } from "../view/part-view"

export class ReadPartsController implements Controller<IReadPartsController> {
  
  constructor(private readonly readCarsdUseCase:IUseCase<IReadPartsUseCase>) {}

  async handle(): Promise<HttpResponse<PartView[]>> {
    try{

    const response = await  this.readCarsdUseCase.execute()
    
    return ok(response)

  }catch(error){

    return serverError(error)

  }

  }

}