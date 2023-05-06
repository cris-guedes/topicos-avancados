import { Entity } from "../../main/shared/IBaseEntity"

export type PartIdentify = string

type PartData ={
    name: string
    email: string
    involvement :string
}

export type Part = Entity<PartData,PartIdentify>





