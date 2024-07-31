import React from 'react'
import '../App.css';
import { CiSearch } from 'react-icons/ci';

const Banner = () => {
  return (
    <div className='banner-bg flex items-center justify-center'>
        <div>
            <div className='mx-auto'>
              <h1 className='text-[64px] leading-[96px] font-bold text-[#FFFFFF] font-body'>Your Portal to India's <br /> Exquisite Real Estate</h1>
              <p className='font-body font-normal text-[18px] leading-[21.78px] text-[#F9FAFB] my-10'>Seamlessly connecting you to the heartbeat of India's prime properties.</p>

            <div className='flex items-center justify-center'>
              <button className='font-body px-[28px] py-[16px] flex items-center justify-center gap-3 bg-[#005EAE] text-[#FFFFFF] rounded-[8px]'>
              <CiSearch className="w-[18px] h-[18px] text-[#FFFFFF]" /> Find Property
              </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
