import { Entity } from "../../main/shared/IBaseEntity"

type Record=Entity<any,any>

class Database {
    private records:Array<Record>=[]

    async create(params:Partial<Record>): Promise<Record> {

        this.records.push(params)

        return this.records[0]
}
    
   async read(): Promise<Array<Record>> {
            return this.records
    }

    public async readById(params: Pick<Record,'id'>):Promise<Record>{
        console.log(params)
        return this.records[0]
       
    }

    public async update(params:Partial<Record>){
        console.log(params)
        return this.records[0]
    }

    public async delete(id:Pick<Record,'id'>){
        console.log(id)
    }


}
 
 const database = new Database()

 export {database}