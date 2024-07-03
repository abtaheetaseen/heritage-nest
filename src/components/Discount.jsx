import React from 'react'
import discount from "../assets/images/discount.png"
import { MdArrowOutward } from 'react-icons/md'
import '../App.css';

const Discount = () => {
    return (
        <div className='w-10/12 mx-auto discount-bg mb-[100px] flex items-center'>
            
                <div>
                <h1 className='w-3/5 text-[30px] px-10 text-white'>Get Your
                    First Appointment
                    at 50% Off!</h1>
                    
                    <div className='flex items-center justify-start gap-2 px-10 mt-5'>
                    <button className='flex items-center justify-center gap-2 border-2 border-none bg-yellow-500 font-bold p-2 rounded-xl'>
                    Appointment
                    <MdArrowOutward />
                </button>

                <button className='flex items-center justify-center gap-2 border-2 border-white text-white bg-transparent font-bold p-2 rounded-xl'>
                    Learn More
                    <MdArrowOutward />
                </button>
                    </div>

                </div>
            </div>
    )
}

export default Discount
