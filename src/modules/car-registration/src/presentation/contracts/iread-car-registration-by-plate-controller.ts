import { CarRegistrationDTO } from "../../data/Dtos/car-registration";
import { HttpResponse } from "../../main/shared/IBaseController";






export interface IReadCarRegistrationByPlateController{

   handle(HttpRequest:Pick<CarRegistrationDTO,'plate'>): Promise<HttpResponse<CarRegistrationDTO>> 

}