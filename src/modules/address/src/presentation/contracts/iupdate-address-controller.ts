import type { AddressDTO } from "../../data/Dtos/address";
import { HttpResponse } from "../../main/shared/IBaseController";
import { AddressView } from "../view/address-view";





export interface IUpdateAddressController{

   handle(HttpRequest:Partial<AddressDTO>,id:Pick<AddressDTO,'id'>): Promise<HttpResponse<AddressView>> 

}