import { prisma } from "../../../../../shared/infra/db/prisma"
import { AddressDTO } from "../../data/Dtos/address"
import { Entity } from "../../main/shared/IBaseEntity"

type Address=Entity<AddressDTO,string>

class Database {

    async create(params:Address): Promise<Address> {
        console.log(params)
        return  await prisma.address.create({data:params})
}
public async readByCity(params: Pick<Address,'city'>):Promise<Address[]>{
    const address =await prisma.address.findMany({ where:{city:params.city}})
     if(address)return address
     throw new Error('sem endereços');
        
        
       
    }
    
   async read(): Promise<Array<Address>> {
    console.log('read')

           const address = await prisma.address.findMany()
           if(address)return address
            throw new Error('sem endereços');
    }

    public async readById(params: Pick<Address,'id'>):Promise<Address>{
    const address =await prisma.address.findUnique({ where:{id:params.id}})
     if(address)return address
     throw new Error('sem endereços');
        
        
       
    }

    public async update(params:Partial<Address>){
        console.log(params)
        const {city,id,neighborhood,number,publicPlace,state,report}=params
        
        return await prisma.address.update({data:{city,neighborhood,number,publicPlace,state,report},where:{id}})
    }

    public async delete(params:Pick<Address,'id'>){
        console.log(params)
        
            await prisma.address.delete({where:{id:params.id}})
        
        
    }


}
 
 const database = new Database()

 export {database}