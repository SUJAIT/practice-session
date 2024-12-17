import { Response } from "express";
import { TSuccessResponse } from "./utilsTypes";



const sendResponse = <T>(res:Response, data:TSuccessResponse<T>) =>{
    res.status(data.statusCode).json({
        statusCode:data.statusCode,
        status:true,
        message:data.message,
        data:data.data
    })
}

export default sendResponse;