import React from 'react'
import image from "../../assets/images/Rectangle 30-1.png"

const BookConsultation = () => {
    return (
        <div className='w-10/12 mx-auto mb-[50px] grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[100px]'>

            <div className='flex items-center justify-center'>
                <div>
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="bg-orange-500 h-1 w-[51px]"></div>
                            <h2 className="text-xl font-semibold text-orange-500">Meet the Team For Book Consultation</h2>
                        </div>
                    </div>

                    <h1 className='font-body font-bold text-[40px] leading-[48px] text-[#111827] my-5'>
                        Meet the stewards of your heritage journey
                    </h1>

                    <p className='leading-[24px] font-body text-[16px] text-[#667085] font-medium mb-10'>
                        each member an embodiment of expertise and warmth, dedicated to guiding you home, every step of the way.
                    </p>

                    <button className='shadow-custom-shadow-2 font-montserrat px-[24px] py-[14px] flex items-center justify-center gap-3 bg-[#0059B1] text-[#FFFFFF]'>Book Consultation Now
                    </button>
                </div>
            </div>

            <div className='flex items-center justify-center md:justify-end'>
                <img className='h-[304px]' src={image} alt="" />
            </div>

        </div>
    )
}

export default BookConsultation
