import React from 'react'
import BuyerBanner from '../components/BuyerScreens/BuyerBanner'
import AboutService from '../components/AboutPageComponents/AboutService'
import Testimonials from '../components/AboutPageComponents/Testimonials'
import PostProperty from '../components/BuyerScreens/PostProperty'
import NewListedProperty from '../components/BuyerScreens/NewListedProperty'
import PopularProperties from '../components/BuyerScreens/PopularProperties'

const BuyerScreen = () => {
    return (
        <>
            <BuyerBanner />
            <AboutService />
            <PopularProperties />
            <NewListedProperty />
            <Testimonials />
            <PostProperty />
        </>
    )
}

export default BuyerScreen
