import { Card } from "../entities/card"


export type ICreateCardUseCase ={
    
    execute(params:Card): Promise<Card> 

}



    