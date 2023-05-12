import { Entity } from "../../main/shared/IBaseEntity"
export type AddressIdentify = string

type AddressData ={
        state: string
        city :string
        publicPlace: string
        neighborhood: string
        number: string
        report: string|null
}

export type Address = Entity<AddressData,AddressIdentify>





