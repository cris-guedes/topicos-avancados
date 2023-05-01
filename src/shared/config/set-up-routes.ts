import {Express, Router} from "express";
import { readdirSync } from "fs";

export const setUpRoutes = (app:Express )=>{
    const router = Router()
    
     readdirSync(`${__dirname+'/../routes'}`).map(async fileName=>{
        (await import (`../routes/${fileName}`)).default(router)
        console.log(fileName.replace('.ts',''
        ))
        app.use(`/${fileName.replace('.ts','')}`,router)
       
    })
    
return app
    

}