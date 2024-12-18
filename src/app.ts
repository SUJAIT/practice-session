

import express, { Request, Response } from 'express'
// import userRouter from './module/user/user.router'
// import tourRouter from './module/tour/tour.route'

import router from './routes'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
// import bookingRouter from './module/booking/booking.route'

const app = express()

// middleware
app.use(express.json())

// app.use('/api/user', userRouter)
// app.use('/api/tour', tourRouter)
// app.use('/api/booking', bookingRouter)
// POST: /api/user/create-user

// app.get('/', (req: Request, res: Response) => {
//   res.send({
//     status: true,
//     message: 'Server Live ⚡',
//   })
// })

//application Routes
app.use('/',router)


//global error handling
// app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
//   console.log("error from.ts",err)

//   res
//   .status(StatusCodes.INTERNAL_SERVER_ERROR)
//   .json({success:false,message:err.message,error:err})
// })
//Ulta palata rute Handling
app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: 'Route not found'
  })
})

app.use(globalErrorHandler)

//

export default app
