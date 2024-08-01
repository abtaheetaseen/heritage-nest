import React from 'react'
import AboutBanner from '../components/AboutPageComponents/AboutBanner'
import AboutService from '../components/AboutPageComponents/AboutService'
import OurStory from '../components/AboutPageComponents/OurStory'
import OurTeam from '../components/AboutPageComponents/OurTeam'
import BookConsultation from '../components/AboutPageComponents/BookConsultation'
import Testimonials from '../components/AboutPageComponents/Testimonials'

const AboutUs = () => {
  return (
    <>
      <AboutBanner />
      <AboutService />
      <OurStory />
      <OurTeam />
      <BookConsultation />
      <Testimonials />
    </>
  )
}

export default AboutUs
