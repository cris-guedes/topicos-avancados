import {HttpResponse } from "../../main/shared/IBaseController";
import { AddressView } from "../view/address-view";





export interface IReadAddressesController{

   handle(): Promise<HttpResponse<AddressView[]>> 

}