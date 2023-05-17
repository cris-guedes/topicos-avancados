import {Express} from "express";
import address from "../routes/address";
import part from "../routes/part";
import carRegistration from "../routes/car-registration";

export const setUpRoutes = (app:Express )=>{
    
    
    
        app.use("/address",address)
        app.use("/part",part)
        app.use("/car-registration",carRegistration)
    
    
        

}