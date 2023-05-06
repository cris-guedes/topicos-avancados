import { AddressDTO } from "../../data/Dtos/address";
import {HttpResponse } from "../../main/shared/IBaseController";
import { AddressView } from "../view/address-view";





export interface IReadAddressController{

   handle(HttpRequest:Pick<AddressDTO,'id'>): Promise<HttpResponse<AddressView>> 

}