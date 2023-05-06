export interface IUseCase<T>{
    execute(params?:UseCaseParams):Promise<UseCaseReturn>
}



export type UseCaseReturn<T=any> =T

export type UseCaseParams<T=any>={
    params:T
}

