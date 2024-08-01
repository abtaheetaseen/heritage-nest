import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "../../App.css"
import { FaRegImage } from 'react-icons/fa';
import { MdSquare } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';

const NewListedProperty = () => {

    const properties = [
        {
            name: 'SunnySlope Suites',
            location: 'Meadowshire Park, Greenfield, USA',
            price: '$250000',
            image: 'https://res.cloudinary.com/dbjkwdcmx/image/upload/v1722505658/Banner_Image-2_rsbxly.png',
        },
        {
            name: 'SunnySlope Suites',
            location: 'Meadowshire Park, Greenfield, USA',
            price: '$250000',
            image: 'https://res.cloudinary.com/dbjkwdcmx/image/upload/v1722505725/Banner_Image_dspo1h.png',
        },
        {
            name: 'SunnySlope Suites',
            location: 'Meadowshire Park, Greenfield, USA',
            price: '$250000',
            image: 'https://res.cloudinary.com/dbjkwdcmx/image/upload/v1722505783/Banner_Image-1_ibiksx.png',
        },
        {
            name: 'SunnySlope Suites',
            location: 'Meadowshire Park, Greenfield, USA',
            price: '$250000',
            image: 'https://res.cloudinary.com/dbjkwdcmx/image/upload/v1722505783/Banner_Image-1_ibiksx.png',
        },
    ];

  return (
    <div className="w-10/12 mx-auto my-[50px]">
            <div className='flex items-center justify-between'>
            <h2 className="text-[32px] text-[#101010] font-montserrat font-semibold">New Listed Properties</h2>

            <p className='text-[18px] text-[#0059B1] font-poppins font-semibold underline'>See all property</p>
            </div>
            <div className='my-[50px]'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                onSlideChange={() => console.log('slide change')}
            >
                {properties?.map((property, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[#F9FAFB] rounded-lg overflow-hidden">
                            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />

                            <div className='flex items-center justify-start px-4 mt-[-50px]'>
                            <p className='bg-[#FDF0E7] px-2 py-1 flex items-center justify-center gap-2 rounded-[4px] text-[14px] text-[#101010] font-body font-semibold'>
                                <span><FaRegImage className='text-xl text-[#EE6611]' /></span>
                                20
                                </p>
                            </div>

                            <div className='flex items-center justify-between px-4 pb-4 pt-8'>
                                    <p className='bg-[#C5E2FF] font-poppins text-[14px] font-normal text-[#00254A] rounded-[4px] px-2 py-1'>Apartment</p>

                                    <div className='flex items-center justify-end gap-2'>
                                    <MdSquare className='text-[#EE6611]' />
                                    <p className='font-poppins text-[14px] font-medium text-[#00254A]'>Ready to Move</p>
                                    </div>
                            </div>
                            <hr />
                            <div className="p-4">
                                <h3 className="text-[20px] font-semibold font-montserrat text-[#111827]">{property.name}</h3>

                                <div className='flex items-center justify-start gap-2 mb-3'>
                                <IoLocationOutline className='text-[#EE6611]' />
                                <p className="font-poppins font-normal text-[16px] text-[#6B7280]">{property.location}</p>
                                </div>
                                <p className="text-[24px] font-montserrat text-[#111827] font-semibold">{property.price}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
  )
}

export default NewListedProperty
