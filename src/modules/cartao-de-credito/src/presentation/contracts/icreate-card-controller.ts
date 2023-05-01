import { CardDTO } from "../../data/Dtos/card";
import {HttpResponse } from "../../main/shared/IBaseController";
import { CardView } from "../view/card-view";





export interface ICreateCardController{

   handle(HttpRequest:CardDTO): Promise<HttpResponse<CardView>> 

}