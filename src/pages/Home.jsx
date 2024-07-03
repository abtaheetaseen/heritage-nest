import React from 'react'
import Banner from '../components/Banner'
import Stats from '../components/Stats'
import Who from '../components/Who'
import ServiceSection from '../components/ServiceSection'
import FAQ from '../components/FAQ'
import Discount from '../components/Discount'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
      <Banner />
      <Stats />
      <Who />
      <ServiceSection />
      <Testimonials />
      <FAQ />
      <Discount />
    </>
  )
}

export default Home
