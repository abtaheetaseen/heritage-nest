import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import who from "../assets/images/who.png";

const Who = () => {
  return (
    <div className='w-10/12 mx-auto my-[100px] grid grid-cols-1 lg:grid-cols-2 gap-16'>
      
            <div>
                <button className='flex items-center justify-center gap-2 border-2 border-[#343268] bg-transparent font-bold p-2 rounded-xl text-[#343268] mb-5'>
                    Who we are
                </button>

                <h1 className='text-[22px] md:text-[30px] lg:text-[36px] font-bold mb-5'>
                    We Help To Get Solutions
                </h1>

                <p className='mb-5'>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>

                <button className='flex items-center justify-center gap-2 border-2 border-none bg-yellow-500 font-bold p-2 rounded-xl'>
                    Learn more
                    <MdArrowOutward />
                </button>
            </div>

        <div className='relative'>
            <div className='flex items-center justify-end h-full w-full'>
            <img src={who} alt="" />
            </div>

            <div className='w-[60%] bg-[#343268] p-5 absolute top-72 rounded-3xl flex items-center justify-center'>
                <div>
                <h1 className='text-[26px] text-white font-semibold mb-3'>Our mission is simple</h1>
                <p className='text-white'>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Who
