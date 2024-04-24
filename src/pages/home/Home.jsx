import React from 'react'
import Hero from '../../hero/Hero'
import Popular from '../../components/popular/Popular'
import Trending from '../../components/trending/Trending'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Trending/>
    </div>
  )
}

export default Home
