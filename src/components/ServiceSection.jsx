import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import '../App.css';

const ServiceSection = () => {
  return (
    <div className='w-10/12 mx-auto mt-[150px] mb-[100px] bg-[#FFFFF5] p-10'>

        {/* div 1 */}
      <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-16 mb-16'>

        <div className='flex items-center justify-center'>
            <div>
        <button className='flex items-center justify-center gap-2 border-2 border-[#343268] bg-transparent font-bold p-2 rounded-xl text-[#343268] mb-5'>
                    Service
                </button>

                <h1 className='text-[22px] md:text-[30px] lg:text-[36px] font-bold mb-5'>
                    Empowering Health, <br />
                    Enriching Lives
                </h1>

                <p className='mb-5'>
                We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                </p>

                <button className='flex items-center justify-center gap-2 border-2 border-none bg-yellow-500 font-bold p-2 rounded-xl'>
                    Appointment
                    <MdArrowOutward />
                </button>
                </div>
        </div>

        <div className="relative w-full flex items-end service1-bg h-[400px] rounded-xl">
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="relative p-3 bg-[#020043] bg-opacity-75 text-white rounded-xl w-[60%] mb-5 ml-5">
        <h2 className="text-md md:text-xl lg:text-2xl font-bold mb-4 ">Advanced Technology</h2>
        <p className='hidden md:block lg:block'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
      <div className='flex items-center justify-end'>
        <button className="p-2 bg-yellow-500 rounded-full">
        <MdArrowOutward className='text-3xl' />
        </button>
        </div>
        </div>
    </div>

      </div>

      {/* div 2 */}
      <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-16'>

      <div className="relative w-full flex items-end service2-bg h-[400px] rounded-xl">
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="relative p-3 bg-[#020043] bg-opacity-75 text-white rounded-xl w-[60%] mb-5 ml-5">
        <h2 className="text-md md:text-xl lg:text-2xl font-bold mb-4 ">Online Doctor Meet</h2>
        <p className='hidden md:block lg:block'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
      <div className='flex items-center justify-end'>
        <button className="p-2 bg-yellow-500 rounded-full">
        <MdArrowOutward className='text-3xl' />
        </button>
        </div>
        </div>
    </div>

    <div className="relative w-full flex items-end service3-bg h-[400px] rounded-xl">
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="relative p-3 bg-[#020043] bg-opacity-75 text-white rounded-xl w-[60%] mb-5 ml-5">
        <h2 className="text-md md:text-xl lg:text-2xl font-bold mb-4 ">Consultancy your health</h2>
        <p className='hidden md:block lg:block'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
      <div className='flex items-center justify-end'>
        <button className="p-2 bg-yellow-500 rounded-full">
        <MdArrowOutward className='text-3xl' />
        </button>
        </div>
        </div>
    </div>

      </div>

    </div>
  )
}

export default ServiceSection
