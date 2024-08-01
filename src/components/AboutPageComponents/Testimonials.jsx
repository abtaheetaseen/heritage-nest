import React from 'react'

const Testimonials = () => {
    return (
        <div className='w-10/12 mx-auto mb-[50px]'>

            <div className='text-center mb-[50px]'>
                <h1 className='font-montserrat font-bold text-[40px] text-[#181818]'>Testimonials</h1>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-[32px]'>

                {/* testimonial 1 */}
                <div className='bg-[#ECF5FF] p-8'>
                    <div className="flex items-center justify-center mb-5">
                        <span className="text-[#FEC84B] text-[30px]">&#9733;</span>
                        <span className="text-[#FEC84B] text-[30px]">&#9733;</span>
                        <span className="text-[#FEC84B] text-[30px]">&#9733;</span>
                        <span className="text-[#FEC84B] text-[30px]">&#9733;</span>
                        <span className="text-[#F4E6C5] text-[30px]">&#9734;</span>
                    </div>

                    <p className='font-poppins font-normal text-[18px] leading-[23.4px] text-center text-[#818181] mb-5'>
                        "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."
                    </p>

                    <div className='text-center'>
                        <div className='flex items-center justify-center mb-2'>
                            <img className='w-12 h-12 rounded-full' src="" alt="" />
                        </div>
                        <h5 className='font-montserrat font-semibold text-[20px] text-[#111827]'>Tony Stark</h5>
                        <p className='font-montserrat font-normal text-[16px] text-[#6B7280]'>Marketing manager, XYZ</p>
                    </div>
                </div>

                {/* testimonial 2 */}
                <div className='bg-[#ECF5FF] p-8'>
                    <div className="flex items-center justify-center mb-5">
                        <span className="text-[#FEC84B] text-[30px]">&#9733;</span>
                        <span className="text-[#FEC84B] text-[30px]">&#9733;</span>
                        <span className="text-[#FEC84B] text-[30px]">&#9733;</span>
                        <span className="text-[#FEC84B] text-[30px]">&#9733;</span>
                        <span className="text-[#F4E6C5] text-[30px]">&#9734;</span>
                    </div>

                    <p className='font-poppins font-normal text-[18px] leading-[23.4px] text-center text-[#818181] mb-5'>
                        "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."
                    </p>

                    <div className='text-center'>
                        <div className='flex items-center justify-center mb-2'>
                            <img className='w-12 h-12 rounded-full' src="" alt="" />
                        </div>
                        <h5 className='font-montserrat font-semibold text-[20px] text-[#111827]'>Tony Stark</h5>
                        <p className='font-montserrat font-normal text-[16px] text-[#6B7280]'>Marketing manager, XYZ</p>
                    </div>
                </div>

            </div>

            <div className="flex items-center justify-center mt-[50px]">
                <div className="flex space-x-4">

                    <div className="w-10 h-4 bg-orange-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-200 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-200 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-200 rounded-full"></div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials
