import React from 'react'
import story1 from "../../assets/images/img.jpg"
import story2 from "../../assets/images/img.png"

const OurStory = () => {
    return (
        <div className='mb-[50px] w-10/12 mx-auto'>

            {/* story 1 */}
            <div className='mb-[50px]'>
                <div className='flex items-start justify-start'>
                    <img src={story1} alt="" />
                </div>

                <div className='flex items-center justify-end lg:mt-[-150px]'>
                    <div className='bg-[#ECF5FF] p-8 lg:w-7/12'>
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-500 h-1 w-[51px]"></div>
                                <h2 className="text-xl font-semibold text-orange-500">Our Story</h2>
                            </div>
                        </div>

                        <h1 className='font-body font-bold text-[36px] leading-[48px] text-[#111827] my-5'>
                            Efficient and Transparent
                            Home Buying Solutions
                        </h1>

                        <p className='leading-[20.8px] font-body text-[16px] text-[#667085] font-medium mb-10'>
                            In the symphony of bustling markets and serene landscapes, Heritage-Nest was born a vision to
                        </p>
                    </div>
                </div>
            </div>

            {/* story 2 */}
            <div>
                <div className='flex items-end justify-end'>
                    <img src={story2} alt="" />
                </div>

                <div className='flex items-center justify-start lg:mt-[-150px]'>
                    <div className='bg-[#FDF0E7] p-8 lg:w-7/12'>
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-500 h-1 w-[51px]"></div>
                                <h2 className="text-xl font-semibold text-orange-500">Mission Statement</h2>
                            </div>
                        </div>

                        <h1 className='font-body font-bold text-[36px] leading-[48px] text-[#111827] my-5'>
                            Efficient and Transparent
                            Home Buying Solutions
                        </h1>

                        <p className='leading-[20.8px] font-body text-[16px] text-[#667085] font-medium mb-10'>
                        To bridge the miles with smiles, Heritage-Nest pledges to be the golden thread connecting NRIs to their homeland, through trust, transparency, and tailored real estate solutions.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurStory
