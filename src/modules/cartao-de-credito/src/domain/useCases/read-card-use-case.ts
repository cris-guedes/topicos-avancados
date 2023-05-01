import { Card } from "../entities/card"


export type IReadCardUseCase ={
    
    execute(params:Pick<Card,'id'>): Promise<Card> 

}



    