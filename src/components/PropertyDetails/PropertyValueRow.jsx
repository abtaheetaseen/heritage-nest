import React from 'react'

const PropertyValueRow = () => {
    return (
        <div className='bg-[#ECF5FF] p-6 flex items-center justify-center'>
            <div>
                <p className='font-poppins font-normal text-[16px] text-[#6B7280] mb-3'>Property Value</p>
                <h1 className='font-montserrat font-bold text-[24px] text-[#252323] mb-3'>$ 300k - $ 310k</h1>
                <p className='font-poppins font-normal text-[16px] text-[#6B7280] leading-[20px] mb-3'>Your bid can not be than 10% of the property Minimum value.</p>

                <p className='font-poppins font-normal text-[14px] text-[#252323] mb-3'>Min</p>
                <div className='bg-[#FFFFFF] px-4 py-3 mb-3'>
                    $ 280k
                </div>

                <p className='font-poppins font-normal text-[14px] text-[#252323] mb-3'>Max</p>
                <div className='bg-[#FFFFFF] px-4 py-3 mb-5'>
                    $ 280k
                </div>

                <div className='flex items-center justify-center'>
                    <button className='font-body px-[24px] py-[12px] flex items-center justify-center gap-3 bg-[#005EAE] text-[#FFFFFF] rounded-[8px]'>
                        Bid Property
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PropertyValueRow
