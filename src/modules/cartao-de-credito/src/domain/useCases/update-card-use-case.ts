import { Card } from "../entities/card"


export type UpdateCardUseCase ={
    
    execute(params:Partial<Card>): Promise<Card> 

}



    