import "./Hero.scss"
import React, { useEffect } from 'react'
import { Container } from '../utils/Utils'
import { Carousel } from 'antd';
import { Button } from 'antd'
import Aos from 'aos';

const CarouselData = [
  {
    original_title: 'Top-quality TV shows, movies and more.',
    description: 'The search is over! Let Plex help you find the perfect movie to watch tonight for free',
    image: 'https://psiola-center.ru/wp-content/uploads/7/7/7/777d205316668ccf8fc36645e256f504.jpeg'
  },
  {
    original_title: 'Free Movies to Watch, Anytime Anywhere.',
    description: 'The search is over! Let Plex help you find the perfect movie to watch tonight for free',
    image: 'https://w.forfun.com/fetch/4e/4e2a0a2d86effddc83b574a467ef5763.jpeg'

  },
  {
    original_title: 'Free Movies to Watch, Anytime Anywhere.',
    description: 'The search is over! Let Plex help you find the perfect movie to watch tonight for free',
    image: 'https://img1.fonwall.ru/o/db/movies-captain-marvel-movie-captain-marvel-2019-movies.jpeg?route=thumb&h=350'
  },
  {
    original_title: 'Enjoy on your TV.',
    description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    image: 'https://i.pinimg.com/originals/17/9a/27/179a270b2337c185290882a2521cfeb4.jpg'
  },
]

const Hero = () => {
  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])

  return (
    <div className='hero'>
      <Container>
        <Carousel className='hero-carousel' autoplay>
          {
            CarouselData.map((content, index) =>
              <div data-aos='fade-up' key={index} className="hero-wrapper">
                <div className="hero-content">
                  <h3 className='content-text'>{content.original_title}</h3>
                  <p className='info-text'>{content.description}</p>
                  <div className="hero-actions">
                    <Button className='subscribe-btn' type='primary'>Subscribe</Button>
                    <Button className='trail-btn' type='primary'>Free Trail</Button>
                  </div>
                </div>
                <div className="hero-image">
                  <img src={content.image} />
                </div>
              </div>
            )}
        </Carousel>
      </Container>
    </div>
  )
}

export default Hero
