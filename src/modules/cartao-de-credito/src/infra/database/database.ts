import { Entity } from "../../main/shared/IBaseEntity"

type Record=Entity<any,any>

class Database {
    private records:Array<Record>=[]

    async create(params:Partial<Record>): Promise<Record> {

        this.records.push(params)

        return params
}
    
   async read(): Promise<Array<Record>> {
            return this.records
    }

    public async readById(params: Pick<Record,'id'>){
        console.log(params)
        
        const record =  this.records.filter((record)=>{
            console.log(record)
            return record.id === params.id 
        })
        console.log("record  ",record)
        return record[0]
    }

    public async update(params:Partial<Record>){
        const record =  this.records.map((record,index)=>{
            
            if(record.id===params.id){
                 this.records[index] = params
                 return this.records[index] 
            }
        })
        return record[0]
    }

    public async delete(id:Pick<Record,'id'>){
        const record =  this.records.map((record,index)=>{
            (record.id===id)?this.records[index]=null:null
            return record
        })
        
        return record[0]
    }


}
 
 const database = new Database()

 export {database}