import React from 'react'
import "./Hero.scss"
import { Button } from 'antd'
import { Container } from '../utils/Utils'


const Hero = () => {
  return (
    <div className='hero'>
        <Container>
          <div className="hero-wrapper">
            <div className="hero-content">
                <p className='content-text'>Your ultimate destinition for top-quality TV shows, movies and more</p>
                <p className='info-text'>A Libary of movies and TV shows you can watch any where</p>
            <div className="hero-actions">
          <Button className='subscribe-btn' type='primary'>Subscribe</Button>
          <Button className='trail-btn' type='primary'>Free Trail</Button>
            </div>
            </div>
            <div className="hero-image">
              <img src="https://i.ytimg.com/vi/-fmmtySjKHM/maxresdefault.jpg"  />
            </div>
          </div>
        </Container>
    </div>
  )
}

export default Hero
