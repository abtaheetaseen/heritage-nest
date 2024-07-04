import React from 'react'
import { FaStar } from "react-icons/fa";
import stats1 from "../assets/images/stats1.png";
import stats2 from "../assets/images/stats2.png";
import stats3 from "../assets/images/stats3.png";
import stats4 from "../assets/images/stats4.png";
import stats5 from "../assets/images/stats5.png";

const Stats = () => {
  return (

    <>
    <div className='relative font-bold w-10/12 mx-auto mt-[50px]'>
            <h1 className='text-center lg:text-[45px] md:text-[30px] text-[25px]'>Comprehensive Care <br /> for Every Patient</h1>
        </div>
    
    <div className='w-10/12 mx-auto my-[50px] lg:mt-[-100px] grid grid-cols-1 lg:grid-cols-5 gap-10 relative'>

        <div className='h-[312px] bg-gray-100 rounded-2xl p-6'>
            <h1 className='text-[40px] font-bold'>90%</h1>
            <p className='mb-3'>Patient satisfaction rate, reflecting our commitment.</p>
            <img src={stats1} alt="" />
        </div>

        <div className='flex items-end'>
            <div className='w-full h-[190px] bg-[#FFFFF5] rounded-2xl p-6'>
            <h1 className='text-[40px] font-bold'>500+</h1>
            <p className='mb-3'>Board-certified doctors</p>
            <div className='flex items-center justify-end'>
            <img className='h-[65px] pb-3' src={stats2} alt="" />
            </div>
            </div>
        </div>

        <div className='flex items-end'>
            <div className='w-full h-[170px] bg-[#fff0f0] rounded-2xl p-6'>
            <h1 className='text-[40px] font-bold flex items-center justify-start gap-2'>4.8 <FaStar className='text-yellow-400' /> </h1>
            <p className='mb-3'>Over 20,000 Patient</p>
            <div className='flex items-center justify-start'>
            <img className='' src={stats3} alt="" />
            </div>
            </div>
        </div>

        <div className='flex items-end'>
            <div className='w-full h-[190px] bg-[#FFFFF5] rounded-2xl p-6'>
            <h1 className='text-[40px] font-bold'>$5000</h1>
            <p className='mb-3'>Money spend for poor patient</p>
            <div className='flex items-center justify-end'>
            <img className='h-[50px] pb-3' src={stats4} alt="" />
            </div>
            </div>
        </div>

        <div className='h-[312px] bg-gray-100 rounded-2xl p-6'>
            <h1 className='text-[40px] font-bold'>50+</h1>
            <p className='mb-3'>Free lession video for patient</p>
            <img src={stats5} alt="" />
        </div>

    </div>
    </>
  )
}

export default Stats
