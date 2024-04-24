import React, { useEffect, useState } from 'react'
import "./Trending.scss"
import { Container } from '../../utils/Utils'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useGetAllMovies } from '../../service/query/useGetAllMovies';



const Trending = () => {


    
  
  

    const {data: trendingData} = useGetAllMovies("trending/all/day")
  
  

    return (
        <div className='trending'>
            <Container>
                <div className="trending-wrapper">
                    <h3 className='trending-title'>Trending</h3>
                    <Swiper
          spaceBetween={40}
          slidesPerView={4}
          centeredSlides={false}
          speed={900}
          loop={true}
          autoplay={{
            delay: 3000,
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
          trendingData?.map(movie => 
          <SwiperSlide className='trending__slide-card' key={movie.id}>
            <Link to={`/movie/${movie.id}`} className='trending__slide-link'>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
              <h5 className='movie-title'>{movie.title ? movie.title : "Trending film"}</h5>
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

export default Trending
