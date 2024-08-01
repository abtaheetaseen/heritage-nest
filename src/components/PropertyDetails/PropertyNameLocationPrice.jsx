import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'

const PropertyNameLocationPrice = () => {
  return (
    <div className='w-10/12 lg:w-7/12 mx-auto lg:mx-[8%] mt-[50px]'>
        <div className='flex items-start  md:justify-between flex-col md:flex-row mb-2'>
        <h1 className='font-body font-semibold text-[20px] leading-[24px] text-[#010101] md:mb-0 mb-2'>3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad</h1>

        <p className='font-body font-semibold text-[28px] leading-[24px] text-[#010101]'>$ 300k</p>
        </div>

      <div className='flex items-center justify-start gap-2'>
      <IoLocationOutline className='text-[#EE6611] text-xl' />
      <span className='font-body font-normal text-[18px] leading-[24px] text-[#606060]'>Meadowshire Park, Greenfield, USA</span>
      </div>

      <hr className='mt-5'/>
    </div>
  )
}

export default PropertyNameLocationPrice
 