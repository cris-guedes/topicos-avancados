import { CarRegistrationDTO } from "../../data/Dtos/car-registration";
import { HttpResponse } from "../../main/shared/IBaseController";






export interface IUpdateCarRegistrationController{

   handle(HttpRequest:Partial<CarRegistrationDTO>,id:Pick<CarRegistrationDTO,'id'>): Promise<HttpResponse<CarRegistrationDTO>> 

}