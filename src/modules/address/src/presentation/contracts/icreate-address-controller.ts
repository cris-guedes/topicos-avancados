import { AddressDTO } from "../../data/Dtos/address";
import {HttpResponse } from "../../main/shared/IBaseController";
import { AddressView } from "../view/address-view";





export interface ICreateAddressController{

   handle(HttpRequest:AddressDTO): Promise<HttpResponse<AddressView>> 

}