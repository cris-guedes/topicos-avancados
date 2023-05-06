import { PartDTO } from "../../data/Dtos/part";
import { HttpResponse } from "../../main/shared/IBaseController";
import { PartView } from "../view/part-view";





export interface ICreatePartController{

   handle(HttpRequest:PartDTO): Promise<HttpResponse<PartView>> 

}