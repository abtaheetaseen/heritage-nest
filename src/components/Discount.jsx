import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import '../App.css';
import discountLogo from "../assets/images/footerLogo.png"

const Discount = () => {
    return (
        <div className='w-10/12 mx-auto discount-bg mb-[100px] flex items-center'>

            
                <div className='w-full'>
                <div className='flex items-center justify-end px-10 mb-10 lg:mb-0 md:mb-0'>
                   <img src={discountLogo} alt="" />
                </div>
                <h1 className='lg:w-2/5 md:w-2/5 w-4/5 text-[20px] md:text-[30px] lg:text-[30px] px-10 text-white font-bold'>Get Your
                    First Appointment
                    at 50% Off!</h1>
                    
                    <div className='flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center justify-start gap-2 px-10 mt-5'>
                    <button className='flex items-center justify-center gap-2 border-2 border-none bg-yellow-500 font-bold p-2 rounded-xl'>
                    Appointment
                    <MdArrowOutward />
                </button>

                <button className='flex items-center justify-center gap-2 border-2 border-white text-white bg-transparent p-2 rounded-xl'>
                    Learn More
                    <MdArrowOutward />
                </button>
                    </div>

                </div>
            </div>
    )
}

export default Discount
