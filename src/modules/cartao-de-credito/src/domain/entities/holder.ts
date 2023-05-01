
import { Entity } from "../../main/shared/IBaseEntity"
import { Card, CardIdentify } from "./card"

export type Holder = Entity<HolderData,HolderIndentify>

 type HolderData ={
    name:string,
    age:number,
    address:string
    card?:CardIdentify[]
}

type HolderIndentify = string

