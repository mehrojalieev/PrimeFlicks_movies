import React, { useEffect, useState } from 'react'
import { Container } from '../../utils/Utils'
import { useGetAllMovies } from '../../service/query/useGetAllMovies'
import { Link } from 'react-router-dom'
import './TvShows.scss'
import { SearchOutlined } from '@ant-design/icons'
import { instance } from '../../api'

const API_KEY = "e8146ffd5337cb04d8fa4a759df0d413"

const TvShows = () => {

    const {data} = useGetAllMovies('tv/airing_today')

    const [seriaData, setSeriaData] = useState([])
    console.log(seriaData);
    const [inputValue, setInputValue] = useState('')


// useEffect(() => {


// }, [])


const handleSearchSeria = async (e) => {
        try {
        const response = await instance.get(`/search/tv?api_key=${API_KEY}&query=${e.target.value}`)    
        setSeriaData(response?.data?.results)
    } 
    catch (error) {
        console.log(error);
    }
}


  return (
    <div className='tv-shows'>
      <Container>
        <h2 className='tv__shows-title'>Tv Shows</h2>


        <form className="search__seria-form">
            <input onChange={handleSearchSeria} type="text" placeholder='Search Tv series...' />
            <button><SearchOutlined/></button>
        </form>

        <div className="tvshows__card-wrapper">
        {
            seriaData.length > 0 ? seriaData?.map(movie =>
              <div key={movie.id} className="movie-card">
                  <Link to={`/movie/${movie?.id}`} className="movie-card" >
                    
                    <img src={ movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HKQsjvJppWrBzlh2ygNM13E27wvceqJdUR2kOutn91ou-PCtiDDad3mldsoqDBl72Sk&usqp=CAU'} alt="" />
                </Link>
                    <h5 className="movie-title">{movie?.title ? movie?.title?.slice(0, 35) : 'Popular Movie'}</h5>

              </div>
            ) 
            :  data?.map(movie =>
                <div key={movie.id} className="movie-card">
                    <Link to={`/movie/${movie?.id}`} className="movie-card" >
                      
                      <img src={ movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HKQsjvJppWrBzlh2ygNM13E27wvceqJdUR2kOutn91ou-PCtiDDad3mldsoqDBl72Sk&usqp=CAU'} alt="" />
                  </Link>
                      <h5 className="movie-title">{movie?.title ? movie?.title?.slice(0, 35) : 'Popular Movie'}</h5>
  
                </div>
              )
        }
        </div>
      </Container>
    </div>
  )
}

export default TvShows
