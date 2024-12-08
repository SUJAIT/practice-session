import mongoose from "mongoose";


export interface IBooking {
    user:mongoose.Schema.Types.ObjectId //mongodb data base a ja Uniq id ta pabo sata ababa Bosata hoi..
    tour:mongoose.Schema.Types.ObjectId
    bookedSlots: number
    bookingStatus: 'pending' | 'paid' | 'cancelled'
    totalPrice: number
}