/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from 'express'
import userRouter from './module/user/user.router'
import tourRouter from './module/tour/tour.route'
import { StatusCodes } from 'http-status-codes'
import bookingRouter from './module/booking/booking.route'

const app = express()

// middleware
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/tour', tourRouter)
app.use('/api/booking', bookingRouter)
// POST: /api/user/create-user

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})


//global error handling
app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
  console.log("error from.ts",err)

  res
  .status(StatusCodes.INTERNAL_SERVER_ERROR)
  .json({success:false,message:err.message,error:err})
})
//

export default app
