import { Rate } from 'antd'
import { useRecommendMovies } from '../../service/query/useRecommendMovies'
import './RecommendSidebar.scss'
import { Link } from 'react-router-dom'

const RecommendSidebar = ({movie_id}) => {

    const {data} = useRecommendMovies('/movie/top_rated')
    console.log(data?.results);
  return (
       <>
        {
            data?.results?.map(movie =>
                    <Link className='movie-link' to={`/movie/${movie.id}`}>
                <div className="trend-card" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                        <div className="card-info">
                            <h5>{movie?.title?.slice(0, 20)}</h5>
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

export default RecommendSidebar
