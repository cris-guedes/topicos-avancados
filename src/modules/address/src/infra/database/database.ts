import { prisma } from "../../../../../shared/infra/db/prisma"
import { AddressDTO } from "../../data/Dtos/address"
import { Entity } from "../../main/shared/IBaseEntity"

type Record=Entity<AddressDTO,string>

class Database {

    async create(params:Record): Promise<Record> {
        console.log(params)
        return  await prisma.address.create({data:params})
}
    
   async read(): Promise<Array<Record>> {
    console.log('read')

           const address = await prisma.address.findMany()
           if(address)return address
            throw new Error('sem endereços');
    }

    public async readById(params: Pick<Record,'id'>):Promise<Record>{
    const address =await prisma.address.findUnique({ where:{id:params.id}})
     if(address)return address
     throw new Error('sem endereços');
        
        
       
    }

    public async update(params:Partial<Record>){
        console.log(params)
        const {city,id,neighborhood,number,publicPlace,state}=params
        
        return await prisma.address.update({data:{city,neighborhood,number,publicPlace,state},where:{id}})
    }

    public async delete(params:Pick<Record,'id'>){
        console.log(params)
        
            await prisma.address.delete({where:{id:params.id}})
        
        
    }


}
 
 const database = new Database()

 export {database}