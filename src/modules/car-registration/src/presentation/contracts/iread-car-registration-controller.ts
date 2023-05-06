import { CarRegistrationDTO } from "../../data/Dtos/car-registration";
import { HttpResponse } from "../../main/shared/IBaseController";






export interface IReadCarRegistrationController{

   handle(HttpRequest:Pick<CarRegistrationDTO,'id'>): Promise<HttpResponse<CarRegistrationDTO>> 

}