import { Address } from "../../domain/entities/adress";


export type AddressDTO = {
    id:string;
    state: string;
    city: string;
    publicPlace: string;
    neighborhood: string;
    number: string;
}