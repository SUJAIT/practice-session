/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
// import { TErrorResponse } from "./middlewareInterface";
import mongoose from "mongoose";
import { handleGenericError } from "../helpers/helpersGenericError";
import { handlerDuplicateError } from "../helpers/handleDuplicateError";
import { handleCastError } from "../helpers/handleCastError";
import { handlerZodError } from "../helpers/handleZodError";



export const globalErrorHandler = (err: any, req:Request, res:Response, _next:NextFunction) =>{

if (err.name && err.name === "ZodError"){
    handlerZodError(err, res)
}

else if(err instanceof mongoose.Error.CastError) {
  
 handleCastError(req,res)
 }
else if(err instanceof mongoose.Error.ValidationError){
    res 
    .status(StatusCodes.BAD_REQUEST)
    .json({success:false,message:err.message,error:err})
}

 else if (err.code && err.code === 11000){
    handlerDuplicateError(err,res)
 }
 
 else if (err instanceof Error){ 
 handleGenericError(err,res)
 }

  
}