import { prisma } from "../../../../../shared/infra/db/prisma"
import { PartDTO } from "../../../../part/src/data/Dtos/part"

import { Entity } from "../../main/shared/IBaseEntity"

type Record=Entity<PartDTO,string>

class Database {

    async create(params:Record): Promise<Record> {
        console.log(params)
        return  await prisma.part.create({data:params})
}
    
   async read(): Promise<Array<Record>> {
    console.log('read')

           const part = await prisma.part.findMany()
           if(part)return part
            throw new Error('sem endereços');
    }

    public async readById(params: Pick<Record,'id'>):Promise<Record>{
    const part =await prisma.part.findUnique({ where:{id:params.id}})
     if(part)return part
     throw new Error('sem endereços');
        
        
       
    }

    public async update(params:Partial<Record>){
        console.log(params)
        const {email,involvement,name,id}=params
        
        return await prisma.part.update({data:{email,involvement,name},where:{id}})
    }

    public async delete(params:Pick<Record,'id'>){
        console.log(params)
        
            await prisma.part.delete({where:{id:params.id}})
        
        
    }


}
 
 const database = new Database()

 export {database}