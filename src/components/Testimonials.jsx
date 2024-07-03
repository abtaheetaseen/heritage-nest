import React from 'react'
import { FaStar } from 'react-icons/fa'
import test1 from "../assets/images/test1.png"
import test2 from "../assets/images/test2.jpeg"
import test3 from "../assets/images/test3.jpeg"

const Testimonials = () => {
    return (
        <div className='w-10/12 mx-auto mb-[100px]'>
            <button className='flex items-center justify-center gap-2 border-2 border-[#343268] bg-transparent font-bold py-2 px-5 rounded-xl text-[#343268] mb-5'>
                Testimonials
            </button>
            <h1 className='text-[22px] md:text-[30px] lg:text-[36px] font-bold mb-5'>What they say about us</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-16'>

                <div className='bg-[#FFFFF5] p-5'>
                    <h1 className='text-lg font-semibold mb-3'>Expertise and Compassion combined</h1>

                    <p className='mb-3'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way</p>

                    <div className='flex items-center justify-start gap-3'>
                        <img className='w-10 h-10 rounded-full' src={test1} alt="" />
                        <div>
                            <h1 className='font-bold'>Sarah D, <span className='font-normal'>IT Professional</span></h1>
                            <div className='flex items-center justify-start gap-1'>
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-[#FFFFF5] p-5'>
                    <h1 className='text-lg font-semibold mb-3'>Life-Saving Care, Life-Changing Experience</h1>

                    <p className='mb-3'>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life</p>

                    <div className='flex items-center justify-start gap-3'>
                        <img className='w-10 h-10 rounded-full' src={test2} alt="" />
                        <div>
                            <h1 className='font-bold'>Michael R, <span className='font-normal'>Business Executive</span></h1>
                            <div className='flex items-center justify-start gap-1'>
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-[#FFFFF5] p-5'>
                    <h1 className='text-lg font-semibold mb-3'>A Partner in Health and Wellness</h1>

                    <p className='mb-3'>As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>

                    <div className='flex items-center justify-start gap-3'>
                        <img className='w-10 h-10 rounded-full' src={test3} alt="" />
                        <div>
                            <h1 className='font-bold'>David S, <span className='font-normal'>Lawyer</span></h1>
                            <div className='flex items-center justify-start gap-1'>
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Testimonials
