import { HttpResponse } from "../../main/shared/IBaseController";
import { PartView } from "../view/part-view";


export interface IReadPartsController{

   handle(): Promise<HttpResponse<PartView[]>> 

}