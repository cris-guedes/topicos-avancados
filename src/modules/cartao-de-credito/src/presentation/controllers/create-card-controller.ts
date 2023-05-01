import { CardDTO } from "../../data/Dtos/card";
import { Card } from "../../domain/entities";
import { ICreateCardUseCase } from "../../domain/useCases/create-card-use-case";
import { Controller, HttpRequest, HttpResponse, ok, serverError } from "../../main/shared/IBaseController";
import { ICreateCardController } from "../contracts/icreate-card-controller";
import { CardView } from "../view/card-view";


export class CreateCardController implements Controller<ICreateCardController>{
    constructor(private readonly createCardUseCase:ICreateCardUseCase){}
    
    async handle(HttpRequest: HttpRequest<any>): Promise<HttpResponse<CardView>> {

        try{

            const response = await  this.createCardUseCase.execute(HttpRequest.params)
            
            return ok(response)
        
          }catch(error){
        
            return serverError(error)
        
          }
        
          }
    

   
    
}