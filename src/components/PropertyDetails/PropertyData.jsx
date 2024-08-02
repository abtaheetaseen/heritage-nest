import React from 'react'
import ImagesRow from './ImagesRow'
import OverviewRow from './OverviewRow'
import PropertyValueRow from './PropertyValueRow'
import { FaCircle } from 'react-icons/fa'
import "../../App.css"

const PropertyData = () => {
    return (
        <div className='my-[50px] w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10'>

            {/* column 1 */}
            <div className='grid grid-rows-2 gap-10 lg:col-span-2'>

                {/* image row */}
                <ImagesRow />

                {/* overview row */}
                <OverviewRow />

            </div>

            {/* column 2 */}
            <div className='grid grid-rows-2 gap-10 lg:col-span-1'>

                {/* property value row */}
                <PropertyValueRow />

                {/* map row */}
                <div className='map-bg h-[356px] rounded-[8px] flex items-center justify-around'>
                    <div className='p-2 rounded-full bg-[#ECF5FF]'>
                        <FaCircle className="text-[#EE6611]" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PropertyData
