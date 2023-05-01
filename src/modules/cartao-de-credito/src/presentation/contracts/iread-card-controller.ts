import { CardDTO } from "../../data/Dtos/card";
import {HttpResponse } from "../../main/shared/IBaseController";
import { CardView } from "../view/card-view";





export interface IReadCardController{

   handle(HttpRequest:Pick<CardDTO,'id'>): Promise<HttpResponse<CardView>> 

}