/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TErrorResponse } from "./middlewareInterface";
import mongoose from "mongoose";


export const globalErrorHandler = (err: TErrorResponse, req:Request, res:Response, _next:NextFunction) =>{

 if(err instanceof mongoose.Error.CastError) {
  
    res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({success: false, message: err.message}) 
 }
else if(err instanceof mongoose.Error.ValidationError){
    res 
    .status(StatusCodes.BAD_REQUEST)
    .json({success:false,message:err.message,error:err})
}

 else if (err.code && err.code === 11000){
    res 
    .status(StatusCodes.BAD_REQUEST)
    .json({success:false,message:err.errorResponse.code,error:err.errmsg})
 }
 
 else if (err instanceof Error){
 
    res 
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({success: false, message: err.message, error:err}) 
 }

  
}