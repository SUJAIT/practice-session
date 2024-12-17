// import { StatusCodes } from "http-status-codes"
// import sendResponse from "./sendResponse"
import { NextFunction, Request,Response } from "express"
import { RequestHandler } from "express-serve-static-core"


const catchAsync = (func:RequestHandler)=>{
    return(req:Request,res:Response,next:NextFunction)=>{
        Promise.resolve(func(req,res,next)).catch((error)=>next(error))
    }
}
//akna muloto req res a r modda any error asla ta promise Error ta next function a pataia diba and sa error app.ts ar modda mara global error defaine kora  function ar modda catch kora falba and ta amdar dekaba
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