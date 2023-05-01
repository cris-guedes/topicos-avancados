import { CardDTO } from "../../data/Dtos/card";
import {HttpResponse } from "../../main/shared/IBaseController";
import { CardView } from "../view/card-view";





export interface IUpdateCardController{

   handle(HttpRequest:Partial<CardDTO>,id:Pick<CardDTO,'id'>): Promise<HttpResponse<CardView>> 

}