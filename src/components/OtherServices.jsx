import React from 'react'
import ServicesDesc from './ServicesDesc'

const OtherServices = () => {
  return (
    <div>
      <div className='text-center font-montserrat font-semibold text-[40px] text-[#181818] mb-10'>
        <h1>Other Services</h1>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[32px] lg:w-10/12 md:w-10/12 w-6/12 mx-auto mb-[50px]'>
        <ServicesDesc heading={"Advanced Property Search"} subHeading={"Effortlessly find your dream property with advanced search filters."} />

        <ServicesDesc heading={"Virtual Tours and Multimedia"} subHeading={"Explore properties through immersive virtual tours and HD photos."} />

        <ServicesDesc heading={"Secure Online Transactions"} subHeading={"Ensure secure transactions and e-sign documents seamlessly online."} />
      </div>
    </div>
  )
}

export default OtherServices
