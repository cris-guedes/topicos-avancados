import { CarRegistration } from "../../domain/entities/car-registration";


export type CarRegistrationDTO ={
    id: string;
    plate: string;
    state: string;
    city: string;
}