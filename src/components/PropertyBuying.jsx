import React from 'react'
import pb1 from "../assets/images/pb1.jpg"
import pb2 from "../assets/images/pb2.jpg"
import pb3 from "../assets/images/pb3.jpg"
import banner1 from "../assets/images/Banner Image-1.png"
import banner2 from "../assets/images/Banner Image-2.png"
import banner from "../assets/images/Banner Image.png"
import { VscTriangleRight } from 'react-icons/vsc'
import { CiSearch } from 'react-icons/ci'

const PropertyBuying = () => {
    return (
        <div className='w-10/12 mx-auto my-[50px]'>

            {/* property buying ----- 1 */}
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-16 mb-[100px]'>

                <div className='relative'>
                    <div>
                        <img className='w-[80%] rounded-[8px]' src={pb1} alt="" />
                    </div>

                    <div className='bg-[#0059B1] w-[72px] h-[72px] rounded-full lg:flex items-center justify-center absolute top-[145px] left-[440px] hidden'>
                        <VscTriangleRight className='text-[#FFFFFF] text-[50px]' />
                    </div>

                    <div className='flex items-center justify-end mt-[-140px]'>
                        <img className='w-[60%] flex items-end rounded-[8px] shadow-custom-shadow' src={banner1} alt="" />
                    </div>
                </div>

                <div>
                    <section>
                        <div className="mx-auto">
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-500 h-1 w-[51px]"></div>
                                <h2 className="text-xl font-semibold text-orange-500">Property buying</h2>
                            </div>
                        </div>

                        <h1 className='font-body font-bold text-[40px] leading-[52px] text-[#111827] my-5'>
                        Efficient and Transparent 
                        Home Buying Solutions
                        </h1>

                        <p className='leading-[20.8px] font-body text-[16px] text-[#667085] font-medium mb-10'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>

                        <button className='font-body px-[20px] py-[12px] flex items-center justify-center gap-3 bg-[#E6EFF7] text-[#00437C] rounded-[8px] font-semibold text-[16px]'>
              <CiSearch className="w-[18px] h-[18px] text-[#00437C] font-semibold" /> Find Property
              </button>
                    </section>
                </div>

            </div>

            {/* property buying ----- 2 */}
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-16 mb-[100px]'>

                <div>
                    <section>
                        <div className="mx-auto">
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-500 h-1 w-[51px]"></div>
                                <h2 className="text-xl font-semibold text-orange-500">Property buying</h2>
                            </div>
                        </div>

                        <h1 className='font-body font-bold text-[40px] leading-[52px] text-[#111827] my-5'>
                        Efficient and Transparent 
                        Home Buying Solutions
                        </h1>

                        <p className='leading-[20.8px] font-body text-[16px] text-[#667085] font-medium mb-10'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>

                        <button className='font-body px-[20px] py-[12px] flex items-center justify-center gap-3 bg-[#E6EFF7] text-[#00437C] rounded-[8px] font-semibold text-[16px]'>
              <CiSearch className="w-[18px] h-[18px] text-[#00437C] font-semibold" /> Find Property
              </button>
                    </section>
                </div>

                <div className='relative'>

                    <div className='flex items-center justify-end'>
                        <img className='w-[60%] flex items-end rounded-[8px] shadow-custom-shadow-1 z-10' src={banner} alt="" />
                    </div>

                    <div className='bg-[#0059B1] w-[72px] h-[72px] rounded-full lg:flex items-center justify-center absolute top-[145px] left-[440px] z-20 hidden'>
                        <VscTriangleRight className='text-[#FFFFFF] text-[50px]' />
                    </div>

                    <div>
                        <img className='w-[80%] rounded-[8px] mt-[-140px]' src={pb3} alt="" />
                    </div>

                </div>

            </div>

            {/* property buying ----- 3 */}
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-16'>

                <div className='relative'>
                    <div>
                        <img className='w-[80%] rounded-[8px]' src={pb2} alt="" />
                    </div>

                    <div className='bg-[#0059B1] w-[72px] h-[72px] rounded-full lg:flex items-center justify-center absolute top-[145px] left-[440px] hidden'>
                        <VscTriangleRight className='text-[#FFFFFF] text-[50px]' />
                    </div>

                    <div className='flex items-center justify-end mt-[-140px]'>
                        <img className='w-[60%] flex items-end rounded-[8px] shadow-custom-shadow' src={banner2} alt="" />
                    </div>
                </div>

                <div>
                    <section>
                        <div className="mx-auto">
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-500 h-1 w-[51px]"></div>
                                <h2 className="text-xl font-semibold text-orange-500">Property buying</h2>
                            </div>
                        </div>

                        <h1 className='font-body font-bold text-[40px] leading-[52px] text-[#111827] my-5'>
                        Efficient and Transparent 
                        Home Buying Solutions
                        </h1>

                        <p className='leading-[20.8px] font-body text-[16px] text-[#667085] font-medium mb-10'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>

                        <button className='font-body px-[20px] py-[12px] flex items-center justify-center gap-3 bg-[#E6EFF7] text-[#00437C] rounded-[8px] font-semibold text-[16px]'>
              <CiSearch className="w-[18px] h-[18px] text-[#00437C] font-semibold" /> Find Property
              </button>
                    </section>
                </div>

            </div>

        </div>
    )
}

export default PropertyBuying
