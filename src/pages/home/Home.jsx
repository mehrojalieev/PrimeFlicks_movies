import React from 'react'
import Hero from '../../hero/Hero'
import Popular from '../../components/popular/Popular'
import Trending from '../../components/trending/Trending'
import Feature from '../../components/feature/Feature'
import Footer from '../../layout/footer/Footer'
import TariffPlans from '../../components/tariff-plans/TariffPlans'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Trending/>
        <TariffPlans/>
        <Feature/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home
