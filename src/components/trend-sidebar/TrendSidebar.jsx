import React from 'react'
import { useGetAllMovies } from '../../service/query/useGetAllMovies'
import "./TrendSidebar.scss"
import { Rate } from 'antd'
import { Link } from 'react-router-dom'

const TrendSidebar = () => {
    const {data: trendData} = useGetAllMovies("trending/all/day")
  return (
    <>
        {
            trendData?.map(movie =>
                    <Link className='movie-link' to={`/movie/${movie.id}`}>
                <div className="trend-card" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                        <div className="card-info">
                            <h5>{movie?.title?.slice(0, 30)}</h5>
                            <div className="info-action">
                                <p>Action</p>
                                <Rate className='rating' defaultValue={3}/>
                            </div>
                        </div>
                </div>
                    </Link>
            )
        } 
    </>
  )
}

export default TrendSidebar
