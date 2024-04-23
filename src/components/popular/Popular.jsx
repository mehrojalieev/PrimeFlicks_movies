import React, { useEffect, useState } from 'react'
import "./Popular.scss"
import { Container } from '../../utils/Utils'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';



const Popular = () => {

  const [popularData, setPopularData] = useState([])

  const API_KEY = "e8146ffd5337cb04d8fa4a759df0d413"


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setPopularData(data.results)
      })
  }, [])


  return (
    <div className='popular'>
      <Container>
        <div className="popular-wrapper">
          <h3 className='popular-title'>Popular</h3>
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          centeredSlides={false}
          speed={1200}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
         {
          popularData.map(movie => 
          <SwiperSlide className='popular__slide-card' key={movie.id}>
            <Link className='popular__slide-link' to={`/movie/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
              <h5 className='movie-title'>{movie.title}</h5>
            </Link>
          </SwiperSlide>
          )
         }
        </Swiper>
        </div>
      </Container>
    </div>
  )
}

export default Popular
