import React from 'react'
import { CgGym } from 'react-icons/cg';
import { CiPhone } from 'react-icons/ci';
import { FaBatteryFull, FaDumbbell, FaSwimmer, FaTree, FaParking, FaLock, FaWater, FaSeedling, FaUniversalAccess, FaConciergeBell, FaUserShield, FaRecycle, FaShower, FaTv, FaGasPump, FaWifi, FaRunning, FaBaby, FaGamepad, FaHouseDamage } from 'react-icons/fa';
import { GiNuclearWaste } from 'react-icons/gi';
import { LuForklift, LuParkingCircle } from 'react-icons/lu';
import { MdCleaningServices, MdLocalLaundryService } from 'react-icons/md';

const Amenities = () => {

    const amenitiesList = [
        { icon: <FaBatteryFull />, label: 'Power Back Up' },
        { icon: <LuForklift />, label: 'Lift' },
        { icon: <FaHouseDamage />, label: 'Club House' },
        { icon: <CgGym />, label: 'Gym' },
        { icon: <LuParkingCircle />, label: 'Park' },
        { icon: <FaParking />, label: 'Reserved Parking' },
        { icon: <FaLock />, label: 'Security' },
        { icon: <FaWater />, label: 'Water Storage' },
        { icon: <CiPhone />, label: 'Intercom Facility' },
        { icon: <MdCleaningServices />, label: 'Maintenance Staff' },
        { icon: <GiNuclearWaste />, label: 'Waste Disposal' },
        { icon: <MdLocalLaundryService />, label: 'Laundry' },
        { icon: <FaSeedling />, label: 'Private Terrace' },
        { icon: <FaUniversalAccess />, label: 'Vaastu Compliant' },
        { icon: <FaConciergeBell />, label: 'Service/Goods Lift' },
        { icon: <FaUserShield />, label: 'Intercom Facility' },
        { icon: <FaWifi />, label: 'Internet/Wi-Fi Connectivity' },
        { icon: <FaRecycle />, label: 'Waste Disposal' },
        { icon: <FaShower />, label: 'Laundry Service' },
        { icon: <FaTv />, label: 'DTH Television Facility' },
        { icon: <FaGasPump />, label: 'Piped Gas' },
        { icon: <FaRunning />, label: 'Jogging and Strolling Track' },
        { icon: <FaBaby />, label: 'Early Learning Centre' },
        { icon: <FaGamepad />, label: 'Kids Play Area' },
      ];

  return (
    <div className="w-10/12 mx-auto bg-[#F9FAFB] p-6 border-2 border-[#E5E7EB] rounded-[8px] mb-[50px] lg:mt-[-200px]">
      <h2 className="text-[24px] font-semibold font-montserrat mb-10">Amenities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-2 md:gap-x-5 gap-y-16">
        {amenitiesList?.map((amenity, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="text-xl">{amenity.icon}</div>
            <div className='font-montserrat text-[16px] font-medium text-[#101010]'>{amenity.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Amenities
