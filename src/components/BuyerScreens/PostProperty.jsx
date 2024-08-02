import React from 'react'

const PostProperty = () => {
    return (
        <div className='h-[200px] bg-[#FDF0E7] grid'>
            <div className='flex items-center justify-between gap-[64px] w-10/12 mx-auto'>

                <div>
                    <h1 className='font-montserrat text-[20px] leading-[30px] font-semibold text-[#101828] mb-2'>Post your Property for free</h1>
                    <p className='font-poppins text-[16px] leading-[24px] font-normal text-[#475467]'>List it on Your Propriety and get genuine leads</p>
                </div>

                <div>
                    <button className='bg-[#F06224] px-[28px] py-[16px] rounded-[8px] text-[#FFFFFF]'>
                        Post Property
                    </button>
                </div>

            </div>
        </div>
    )
}

export default PostProperty
