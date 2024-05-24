import './TvShows.scss'
import React, {  useState } from 'react'
import { Container } from '../../utils/Utils'
import { useGetAllMovies } from '../../service/query/useGetAllMovies'
import { SearchOutlined } from '@ant-design/icons'
import { instance } from '../../api'
import MovieCard from '../../components/movie-card/MovieCard'

const API_KEY = "e8146ffd5337cb04d8fa4a759df0d413"

const TvShows = () => {
  const { data } = useGetAllMovies('tv/airing_today')
  const [seriaData, setSeriaData] = useState([])

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
          <button><SearchOutlined /></button>
        </form>

        <div className="tvshows__card-wrapper">
          {
            seriaData.length > 0 ? seriaData?.map(movie =>
              <MovieCard movie={movie} key={movie.id} />
            )
              : data?.map(movie =>
                <MovieCard movie={movie} key={movie.id} />
              )
          }
        </div>
      </Container>
    </div>
  )
}

export default TvShows
