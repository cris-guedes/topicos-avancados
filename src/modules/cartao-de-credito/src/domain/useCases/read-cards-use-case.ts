import { Card } from "../entities/card"


export type IReadCardsUseCase ={
    
    execute(): Promise<Card[]> 

}



    