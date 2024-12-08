export type TSuccessResponse<T> = {
    status: boolean,
    message: string,
    data: T | T[] | null,
    statusCode:number
}

