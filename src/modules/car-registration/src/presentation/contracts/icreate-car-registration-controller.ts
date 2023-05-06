import { CarRegistrationDTO } from "../../data/Dtos/car-registration";
import { HttpResponse } from "../../main/shared/IBaseController";
import { CarRegistrationView } from "../view/car-registration";


export interface ICreateCarRegistrationController{

   handle(HttpRequest:CarRegistrationDTO): Promise<HttpResponse<CarRegistrationView>> 

}