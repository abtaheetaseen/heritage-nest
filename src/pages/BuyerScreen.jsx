import React from 'react'
import BuyerBanner from '../components/BuyerScreens/BuyerBanner'
import AboutService from '../components/AboutPageComponents/AboutService'
import Testimonials from '../components/AboutPageComponents/Testimonials'
import PostProperty from '../components/BuyerScreens/PostProperty'
import NewListedProperty from '../components/BuyerScreens/NewListedProperty'

const BuyerScreen = () => {
  return (
    <>
      <BuyerBanner />
      <AboutService />
      <NewListedProperty />
      <Testimonials />
      <PostProperty />
    </>
  )
}

export default BuyerScreen
