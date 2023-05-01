import { Entity } from "../../main/shared/IBaseEntity"
import { Holder } from "./holder"

export type CardIdentify = string

type CardData ={
    holder:Holder,
    limit:number,
    securityCode:number
}

export type Card = Entity<CardData,CardIdentify>





