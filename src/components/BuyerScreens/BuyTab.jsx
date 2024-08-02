import React from 'react'
import { AiFillDollarCircle } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMdHome } from 'react-icons/io'

const BuyTab = () => {
    return (
        <div>

            {/* search panel */}
            <div className='my-[20px]'>
                <form>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input type="text" className="grow" placeholder="Search Properties" />

                    </label>
                </form>
            </div>

            {/* input panel */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                {/* location */}
                <div>
                    <div>
                        <label className="flex text-gray-700 mb-2 items-center justify-start gap-2" htmlFor="propertyType">
                            <FaLocationDot className='text-[#EE6611] text-[20px]' />
                            <span className='font-semibold font-body text-[18px] text-[#181818]'>Your Location</span>
                        </label>
                        <select id="propertyType" className="w-full p-3 border-none rounded-lg bg-[#ECF5FF]">
                            <option value=""></option>
                        </select>
                    </div>
                </div>

                {/* property */}
                <div>
                    <div>
                        <label className="flex text-gray-700 mb-2 items-center justify-start gap-2" htmlFor="propertyType">
                            <IoMdHome className='text-[#EE6611] text-[20px]' />
                            <span className='font-semibold font-body text-[18px] text-[#181818]'>Property Type</span>
                        </label>
                        <select id="propertyType" className="w-full p-3 border-none rounded-lg bg-[#ECF5FF]">
                            <option value=""></option>
                        </select>
                    </div>
                </div>

                {/* budget */}
                <div>
                    <div>
                        <label className="flex text-gray-700 mb-2 items-center justify-start gap-2" htmlFor="propertyType">
                            <AiFillDollarCircle className='text-[#EE6611] text-[20px]' />
                            <span className='font-semibold font-body text-[18px] text-[#181818]'>Budget</span>
                        </label>
                        <input
                            id="budget"
                            type="number"
                            className="w-full p-3 border-none rounded-lg bg-[#ECF5FF]"
                        />
                    </div>
                </div>

            </div>

            {/* button pannel */}
            <div>
                <button className="mt-6 w-full p-3 bg-[#0059B1] text-white rounded-[4px] flex items-center justify-center gap-3">
                    <CiSearch className='text-[20px]' />
                    Find Property
                </button>
            </div>

        </div>
    )
}

export default BuyTab
