import { Address } from "../../domain/entities/address";


export type AddressDTO = {
    id:string;
    state: string;
    city: string;
    publicPlace: string;
    neighborhood: string;
    number: string;
}