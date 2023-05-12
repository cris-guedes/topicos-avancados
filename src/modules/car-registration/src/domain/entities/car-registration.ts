import { Entity } from "../../main/shared/IBaseEntity"


export type CarRegistrationIdentify = string

type CarRegistrationData ={
plate:string 
state: string
city :string
vehicle:string|null
}

export type CarRegistration = Entity<CarRegistrationData,CarRegistrationIdentify>





