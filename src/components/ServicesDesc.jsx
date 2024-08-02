import React from 'react'
import { MdFoundation } from 'react-icons/md'

const ServicesDesc = ({ heading, subHeading }) => {
    return (
        <div className='flex items-start justify-center gap-5 rounded-[4px] bg-[#ECF5FF] p-6'>
            <div className='w-12 h-12 rounded-[4px] bg-[#EE6611] flex items-center justify-center'>
                <MdFoundation className='text-3xl text-white' />
            </div>

            <div>
                <h1 className='font-montserrat font-semibold text-[24px] leading-[32px] text-[#111827] mb-5'>
                    {heading}
                </h1>
                <p className='font-poppins font-medium text-[16px] leading-[24px] text-[#6B7280]'>
                    {subHeading}
                </p>
            </div>
        </div>
    )
}

export default ServicesDesc
