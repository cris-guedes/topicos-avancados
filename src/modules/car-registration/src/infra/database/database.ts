import { prisma } from "../../../../../shared/infra/db/prisma"
import { CarRegistrationDTO } from "../../data/Dtos/car-registration"



import { Entity } from "../../main/shared/IBaseEntity"

type Record=Entity<CarRegistrationDTO,string>

class Database {

    async create(params:Record): Promise<Record> {
        console.log(params)
        return  await prisma.carRegistration.create({data:params})
}
    
   async read(): Promise<Array<Record>> {
    console.log('read')
    

           const carRegistration = await prisma.carRegistration.findMany()
           if(carRegistration)return carRegistration
            throw new Error('sem endereços');
    }

    public async readById(params: Pick<Record,'id'>):Promise<Record>{
    const carRegistration =await prisma.carRegistration.findUnique({ where:{id:params.id}})
     if(carRegistration)return carRegistration
     throw new Error('sem endereços');
        
        
       
    }

    public async update(params:Partial<Record>){
        console.log(params)
        const {city,id,plate,state}=params
        
        return await prisma.carRegistration.update({data:{city,plate,state},where:{id}})
    }

    public async delete(params:Pick<Record,'id'>){
        console.log(params)
        
            await prisma.carRegistration.delete({where:{id:params.id}})
        
        
    }


}
 
 const database = new Database()

 export {database}