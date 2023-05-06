import { HttpResponse } from "../../main/shared/IBaseController";
import { CarRegistrationView } from "../view/car-registration";





export interface IReadCarsRegistrationsController{

   handle(): Promise<HttpResponse<CarRegistrationView[]>> 

}