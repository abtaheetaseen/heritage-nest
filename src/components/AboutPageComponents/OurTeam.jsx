import React from 'react'
import team1 from "../../assets/images/Rectangle 29.png"
import team2 from "../../assets/images/Rectangle 30.png"
import team3 from "../../assets/images/Rectangle 31.png"

const OurTeam = () => {
    return (
        <div className='w-10/12 mx-auto mb-[50px]'>

            <div className='mb-[50px]'>
                <div className="flex items-center gap-2 mb-5">
                    <div className="bg-orange-500 h-1 w-[51px]"></div>
                    <h2 className="text-xl font-semibold text-orange-500 font-poppins">Our Team</h2>
                </div>

                <h1 className='font-body font-bold text-[40px] text-[#111827] my-5'>
                    Discover the Faces Behind Our Success
                </h1>
            </div>

            {/* team members */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                <img src={team1} alt="" />
                <img src={team2} alt="" />
                <img src={team3} alt="" />
            </div>

        </div>
    )
}

export default OurTeam
