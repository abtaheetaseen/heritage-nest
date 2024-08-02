import React from 'react'
import { IoArrowDownCircleOutline } from 'react-icons/io5'

const AboutService = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-[32px] w-10/12 mx-auto mb-[50px]'>

            <div className='h-[185px] bg-[#FDF0E7] p-6'>
                <div>
                    <h1 className='font-montserrat font-bold text-[40px] leading-[48.76px] text-[#D95D0F] mb-2'>2k+</h1>
                    <p className='font-poppins font-normal text-[16px] leading-[24px] text-[#1F2937] mb-8'>New Flat Listed</p>
                    <div className='flex items-center justify-between'>
                        <p className='font-poppins font-normal text-[16px] leading-[24px] text-[#EE6611] underline'>View all</p>
                        <IoArrowDownCircleOutline className='text-4xl text-[#EE6611]' />
                    </div>
                </div>
            </div>

            <div className='h-[185px] bg-[#ECF5FF] p-6'>
                <div>
                    <h1 className='font-montserrat font-bold text-[40px] leading-[48.76px] text-[#0051A1] mb-2'>2k+</h1>
                    <p className='font-poppins font-normal text-[16px] leading-[24px] text-[#1F2937] mb-8'>New Flat Listed</p>
                    <div className='flex items-center justify-between'>
                        <p className='font-poppins font-normal text-[16px] leading-[24px] text-[#0059B1] underline'>View all</p>
                        <IoArrowDownCircleOutline className='text-4xl text-[#0059B1]' />
                    </div>
                </div>
            </div>

            <div className='h-[185px] bg-[#FDF0E7] p-6'>
                <div>
                    <h1 className='font-montserrat font-bold text-[40px] leading-[48.76px] text-[#D95D0F] mb-2'>2k+</h1>
                    <p className='font-poppins font-normal text-[16px] leading-[24px] text-[#1F2937] mb-8'>New Flat Listed</p>
                    <div className='flex items-center justify-between'>
                        <p className='font-poppins font-normal text-[16px] leading-[24px] text-[#EE6611] underline'>View all</p>
                        <IoArrowDownCircleOutline className='text-4xl text-[#EE6611]' />
                    </div>
                </div>
            </div>

            <div className='h-[185px] bg-[#ECF5FF] p-6'>
                <div>
                    <h1 className='font-montserrat font-bold text-[40px] leading-[48.76px] text-[#0051A1] mb-2'>2k+</h1>
                    <p className='font-poppins font-normal text-[16px] leading-[24px] text-[#1F2937] mb-8'>New Flat Listed</p>
                    <div className='flex items-center justify-between'>
                        <p className='font-poppins font-normal text-[16px] leading-[24px] text-[#0059B1] underline'>View all</p>
                        <IoArrowDownCircleOutline className='text-4xl text-[#0059B1]' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutService
