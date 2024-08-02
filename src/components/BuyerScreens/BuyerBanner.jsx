import React from 'react'
import buyerBanner from "../../assets/images/buyerBanner.jpeg"
import AllTabs from './AllTabs'

const BuyerBanner = () => {
    return (
        <div className='mb-[50px] relative'>
            <img className='w-full h-[309px] md:mb-[210px]' src={buyerBanner} alt="" />

            <div className='bg-[#FFFFFF] p-8 shadow-custom-shadow-2 w-8/12 mx-auto md:absolute md:top-[30%] md:left-[17%]'>
                <AllTabs />
            </div>
        </div>
    )
}

export default BuyerBanner
