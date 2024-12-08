// import { StatusCodes } from "http-status-codes"
// import sendResponse from "./sendResponse"
import { NextFunction, Request,Response } from "express"
import { RequestHandler } from "express-serve-static-core"


const catchAsync = (func:RequestHandler)=>{
    return(req:Request,res:Response,next:NextFunction)=>{
        Promise.resolve(func(req,res,next)).catch((error)=>next(error))
    }
}

export default catchAsync


// catchAsync (async(req: Request, res: Response,next:NextFunction) => {
//     try {

  
//       sendResponse(res, {
//         statusCode: StatusCodes.OK,
//         message: 'Users getting successfully',
//         data: result,
//         status: true
//       })
//     } catch (error) {
//       next(error)
//     }
//   })