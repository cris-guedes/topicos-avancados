import {HttpResponse } from "../../main/shared/IBaseController";
import { IUseCase } from "../../main/shared/IBaseUseCase";
import { CardView } from "../view/card-view";




export interface IReadCardsController{

   handle(): Promise<HttpResponse<CardView[]>> 

}