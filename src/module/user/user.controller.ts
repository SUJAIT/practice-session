
/* eslint-disable no-console */
// req and res manage
import { StatusCodes } from 'http-status-codes';
import { userService } from './user.service'
import sendResponse from '../utils/sendResponse'
import catchAsync from '../utils/catchAsync';


//create-data
const createUser = catchAsync(async (req,res) => {
    const payload = req.body
    const result = await userService.createUser(payload)
    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      message: "User created Successfully", data: result,
      status: true
    })
})
///

//All-data Get
const getUser =catchAsync( async (req,res) => {
    const result = await userService.getUser()
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Users getting successfully',
      data: result,
      status: true
    })
})
///

//Singale-Data 
const getSingleUser = catchAsync(async (req,res) => {
    console.log(req.params)
    const userId = req.params.userId
    const result = await userService.getSingleUser(userId)
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Users getting successfully',
      data: result,
      status: true
    })

})
///

//Update-Data
const updateUser = catchAsync(async (req,res) => {
  const userId = req.params.userId
  const body = req.body
  const result = await userService.updateUser(userId, body)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User updated successfully',
    data: result,
    status: true
  })
})
///


//Delete-Data
const deleteUser =catchAsync( async (req,res) => {
    const userId = req.params.userId
    await userService.deleteUser(userId)
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'User updated successfully',
      data: {},
      status: true
    })
})
///




export const userController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
}
