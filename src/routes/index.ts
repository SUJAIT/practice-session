import { Router } from 'express';
import userRouter from '../module/user/user.router';
import tourRouter from '../module/tour/tour.route';
import bookingRouter from '../module/booking/booking.route';

const router = Router();

const Routes = [
{
    path:'/api/user',
    route:userRouter
},
{
    path:'/api/tour',
    route:tourRouter
},
{
    path:'/api/booking',
    route:bookingRouter
},

];

Routes.forEach((route) => router.use(route.path, route.route));
//Note: [24No : লাইনটি Express.js-এ একাধিক রাউট সহজে এবং সংক্ষিপ্তভাবে রেজিস্টার করার একটি উপায়]. [1.forEach অ্যারের প্রতিটি উপাদান (অবজেক্ট) এর জন্য একটি ফাংশন চালায়।].[2.router.use হলো Express.js এর একটি মেথড, যা একটি নির্দিষ্ট পাথের জন্য মডিউল বা রাউট যুক্ত করে।].[3.প্রতিটি মডিউলকে router-এ রেজিস্টার করা হচ্ছে তাদের নির্দিষ্ট পাথ ও রাউট অবজেক্ট দিয়ে।]
export default router