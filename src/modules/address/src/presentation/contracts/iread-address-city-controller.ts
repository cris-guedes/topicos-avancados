import { AddressDTO } from "../../data/Dtos/address";
import {HttpResponse } from "../../main/shared/IBaseController";
import { AddressView } from "../view/address-view";





export interface IReadAddressCityController{

   handle(HttpRequest:Pick<AddressDTO,'city'>): Promise<HttpResponse<AddressView[]>> 

}