import React from 'react'
import '../App.css';
import { CiSearch } from 'react-icons/ci';

const Banner = () => {
  return (
    <div className='banner-bg flex items-center justify-center'>
        <div>
            <div className='mx-auto'>
              <h1 className='lg:text-[64px] md:text-[50px] text-[30px] sm:text-[40px] lg:leading-[96px] md:leading-[50px] text-center font-bold text-[#FFFFFF] font-body'>Your Portal to India's <br /> Exquisite Real Estate</h1>
              <p className='font-body font-normal sm:text-[18px] text-[14px] leading-[21.78px] text-[#F9FAFB] my-10 text-center'>Seamlessly connecting you to the heartbeat of India's prime properties.</p>

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
