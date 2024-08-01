import React from 'react'
import image1 from "../../assets/images/Rectangle 20.png";
import image2 from "../../assets/images/Rectangle 21.png";
import image3 from "../../assets/images/Rectangle 21-1.png";

const ImagesRow = () => {
  return (
    <div>
                <img className='mb-5 w-full h-[400px]' src={image1} alt="" />
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-5'>
                    <img className='h-[160px] w-full' src={image2} alt="" />
                    <img className='h-[160px] w-full' src={image3} alt="" />

                    <div className='view-more-img flex items-center justify-center'>
                        <h1 className='font-montserrat font-semibold text-[20px] text-[#FFFFFF]'>View More</h1>
                    </div>
                </div>
            </div>
  )
}

export default ImagesRow
