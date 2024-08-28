import React from 'react'
import Hero from '../../hero/Hero'
import Popular from '../../components/popular/Popular'
import Trending from '../../components/trending/Trending'
import Feature from '../../components/feature/Feature'
import TariffPlans from '../../components/tariff-plans/TariffPlans'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Trending/>
        <TariffPlans/>
        <Feature/>
    </div>
  )
}

export default Home
