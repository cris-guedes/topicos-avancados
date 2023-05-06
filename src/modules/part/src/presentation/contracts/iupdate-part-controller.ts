import { PartDTO } from "../../data/Dtos/part";
import { HttpResponse } from "../../main/shared/IBaseController";
import { PartView } from "../view/part-view";


export interface IUpdatePartController{

   handle(HttpRequest:Partial<PartDTO>,id:Pick<PartDTO,'id'>): Promise<HttpResponse<PartView>> 

}