import React from 'react'
import { FaBath, FaBed } from 'react-icons/fa';
import { MdBalcony } from 'react-icons/md';
import { RiArchiveDrawerLine } from 'react-icons/ri';

const OverviewRow = () => {
    return (
        <div className='bg-[#F9FAFB] p-6 border-2 border-[#E5E7EB] rounded-[8px] md:h-[356px]'>
            <h1 className='w-11/12 mx-auto font-montserrat font-semibold text-[24px] mb-5'>Overview</h1>

            {/* rooms */}
            <div className='flex items-center justify-between flex-wrap p-3 bg-white w-11/12 mx-auto shadow-lg mb-10'>
                <div className='flex items-center justify-start gap-3'>
                    <FaBed />
                    <div className='flex items-center justify-start gap-1'>
                        <span className='font-body font-bold text-[16px] text-[#303030]'>2</span>
                        Beds
                    </div>
                </div>

                <div className='flex items-center justify-start gap-3'>
                    <FaBath />
                    <div className='flex items-center justify-start gap-1'>
                        <span className='font-body font-bold text-[16px] text-[#303030]'>2</span>
                        Bath
                    </div>
                </div>

                <div className='flex items-center justify-start gap-3'>
                    <MdBalcony />
                    <div className='flex items-center justify-start gap-1'>
                        <span className='font-body font-bold text-[16px] text-[#303030]'>2</span>
                        Balcony
                    </div>
                </div>

                <div className='flex items-center justify-start gap-3'>
                    <RiArchiveDrawerLine />
                    Fully Furnished
                </div>
            </div>

            <div className='w-11/12 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[24px]'>
                <div>
                    <p className="font-montserrat font-normal text-[16px] text-[#5C5C5C]">Carpet Area</p>
                    <p className='font-montserrat font-medium text-[16px] text-[#101010]'>2000 sqft</p>
                    <p className='font-montserrat font-normal text-[14px] text-[#535353]'>$225/sqft</p>
                </div>

                <div>
                    <p className="font-montserrat font-normal text-[16px] text-[#5C5C5C]">Floor</p>
                    <p className='font-montserrat font-medium text-[16px] text-[#101010]'>Second(Out of 6th floor)</p>
                </div>

                <div>
                    <p className="font-montserrat font-normal text-[16px] text-[#5C5C5C]">Transaction Type</p>
                    <p className='font-montserrat font-medium text-[16px] text-[#101010]'>Ready to move</p>
                </div>

                <div>
                    <p className="font-montserrat font-normal text-[16px] text-[#5C5C5C]">Lift</p>
                    <p className='font-montserrat font-medium text-[16px] text-[#101010]'>1</p>
                </div>

                <div>
                    <p className="font-montserrat font-normal text-[16px] text-[#5C5C5C]">Facing</p>
                    <p className='font-montserrat font-medium text-[16px] text-[#101010]'>North - East</p>
                </div>

                <div>
                    <p className="font-montserrat font-normal text-[16px] text-[#5C5C5C]">Additional Rooms</p>
                    <p className='font-montserrat font-medium text-[16px] text-[#101010]'>1 servant room & 1 gust room</p>
                </div>

                <div>
                    <p className="font-montserrat font-normal text-[16px] text-[#5C5C5C]">Age of construction</p>
                    <p className='font-montserrat font-medium text-[16px] text-[#101010]'>New Construction</p>
                </div>
            </div>

        </div>
    )
}

export default OverviewRow
