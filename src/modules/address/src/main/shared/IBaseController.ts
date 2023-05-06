export interface Controller<T>{
    handle(HttpRequest:HttpRequest,id?:any):Promise<HttpResponse>
}


export type HttpResponse<T=any> ={
    statusCode:number
    data?:T|Error
}

export type HttpRequest<T=any>={
    params:T
}

export function serverError(error:any):HttpResponse{
    return{
        statusCode:500,
        data:error
    }

}
export function ok(data:any):HttpResponse{
    return{
    statusCode:200,
    data
    }
}