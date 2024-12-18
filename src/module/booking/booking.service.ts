/* eslint-disable no-console */
import mongoose from "mongoose";
import Tour from "../tour/tour.model";
import { IBooking } from "./booking.interface";
import Booking from "./booking.model";


const createBooking = async (payload: IBooking): Promise<IBooking> => {
    // const result = 
    // const { tour, bookedSlots } = payload

    // const requiredTour = await Tour.findById(tour)

    // if (!requiredTour) {
    //     throw new Error('Tour not found')
    // }

    // const totalPrice = requiredTour.price * bookedSlots


    // payload.totalPrice = totalPrice
    // payload.bookingStatus = 'pending'

    // //AbailableSeats Chacked
    // if (requiredTour.availableSeats < bookedSlots) {
    //     throw new Error("Not Enough Seats Available")
    // }
    // ///

    // const booking = await Booking.create(payload)

    // //AbailableSeats Theka Booking Seats Meainas
    // const updatedTour = await Tour.findByIdAndUpdate
    //     (tour, { $inc: { availableSeats: - bookedSlots } }, { new: true })
    // ///

    // if (!updatedTour) {
    //     throw new Error('Failed To Update Tour')
    // }

    // return booking

    const session = await mongoose.startSession()

    session.startTransaction()

    try {

        const { tour, bookedSlots } = payload

        const requiredTour = await Tour.findById(tour)

        if (!requiredTour) {
            throw new Error('Tour not found')
        }

        const totalPrice = requiredTour.price * bookedSlots

        payload.totalPrice = totalPrice
        payload.bookingStatus = 'pending'

        if (requiredTour.availableSeats < bookedSlots) {
            throw new Error('Not enough seats available')
        }

        const booking = await Booking.create([payload], { session })
//[note: Akna Mongoose Bolsa tumar body ta ka akta array ar modda pata ba.and tumi session ar modda aso sata obj dia bola diba.]
        console.log(booking);
        // throw new Error('Failed to create booking');

        // availableSeats = availableSeats - bookedSlots

        const updatedTour = await Tour.findByIdAndUpdate(booking[0].tour, { $inc: { availableSeats: -bookedSlots } }, { new: true, session });

        // console.log(updatedTour);

        if (!updatedTour) {
            throw new Error('Failed to update tour')
        }

        await session.commitTransaction()

        await session.endSession()

        return booking[0]//[note: amra booking variable ar ja kaj ta kortasi ta akta array ar bitor object hisaba return kora so sa jonno array 0 index a raka]

    } catch (error) {
        await session.abortTransaction()
        await session.endSession()
        throw error//aba ba error throw korla error ta sundorbaba deka jai..
    }




}

export const BookingService = {
    createBooking
}
