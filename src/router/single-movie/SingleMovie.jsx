import { Link, useParams } from "react-router-dom"
import "./SingleMovie.scss"
import { useEffect, useState } from "react"
import { Container } from "../../utils/Utils"
import { Button, Rate, Tooltip } from "antd"
import { HeartOutlined, HeartFilled, PlayCircleOutlined, DeleteOutlined, DeleteFilled } from "@ant-design/icons"
import { useGetAllMovies } from "../../service/query/useGetAllMovies"
import Trending from "../../components/trending/Trending"
import { useStore } from "../../zustand/store/useStore"

const SingleMovie = () => {
    const { id } = useParams()
    const API_KEY = "e8146ffd5337cb04d8fa4a759df0d413"
    const { data: recommendData } = useGetAllMovies('tv/top_rated')


    // HOOKS
    const [singleMovie, setSingleMovie] = useState(null)
    const [ratingMovie, setRatingMovie] = useState(2)


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setSingleMovie(data && data)
            })
    }, [id])


    useEffect(() => {
        if (singleMovie?.vote_average < 1) {
            setRatingMovie(1)
        }
        else if (singleMovie?.vote_average > 4) {
            setRatingMovie(3)

        }
        else if (singleMovie?.vote_average > 5) {
            setRatingMovie(5)
        } else {
            setRatingMovie(2)
        }

    }, [singleMovie])



    const {MoviesData, setMoviesData, setRemoveMovie} = useStore()

    const handleAddWishList = (movie) => {
        console.log(movie);
        setMoviesData(movie)
    }
    const movieExistsInWishlist = MoviesData.some(movie => movie?.id === singleMovie?.id);
  
    return (
        <div style={{ backgroundImage: `url(${'https://image.tmdb.org/t/p/w500' + singleMovie?.backdrop_path})` }} className="movie__item-wrapper">
            <Container>
                <div className="movie__item-content__wrapper">
                    <div className="item-image">
                        <img src={`https://image.tmdb.org/t/p/w500/${singleMovie?.poster_path}`} alt={singleMovie?.title} />
                    </div>
                    <div className="item-content">
                        <h3 className="content-title">{singleMovie?.title}</h3>
                        <div className="content-genres">
                            <span> {singleMovie?.release_date?.split('-').join('/')} </span>
                            <span>  ({singleMovie?.origin_country ? singleMovie?.origin_country[0] : 'America'}) </span>

                            {
                                singleMovie?.genres?.map(genre => <span>{genre.name}</span>)
                            }
                        </div>
                        <div className="movie-companies">
                            <div className="content-rating">
                                <p className="rating-text">Rating: </p>
                                <Rate className="movie-rating" defaultValue={ratingMovie && ratingMovie} />
                            </div>
                        </div>
                            <div className="production-company">
                                <p>Production companies: </p>
                                {
                                    singleMovie?.production_companies?.slice(0, 2).map(company =>
                                        <strong>{company.name} &nbsp;</strong>
                                    )
                                }
                            </div>

                      
                        <div className="overview-info">
                            <p className="overview-title">Overview</p>
                            <p className="overview-text">{singleMovie?.overview}</p>
                        </div>

                        <div className="manage__content-action">
                            <Button className="watch-btn" type="primary"><PlayCircleOutlined />Watch Movie</Button>
                            {
                                movieExistsInWishlist ?
                                 <Button onClick={() => setRemoveMovie(singleMovie)} className="remove-btn"><i><DeleteFilled/> </i>from Wishlist</Button>
                              :  <Button onClick={() => handleAddWishList(singleMovie)} className="watchlist-btn" type="primary">+ To WatchList  </Button>
                            }n
                        </div>
                    </div>
                </div>


                <div className="recommend-wrapper">
                    <h3 className="recommend-title">Recommendations</h3>
                    <div className="recommend__slide-container">
                        {
                            recommendData?.map(movie =>
                                <div onClick={() => window.scrollTo(0, 0)} className="recommend__slide-card">
                                    <Link to={`/movie/${movie.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                                    </Link>
                                </div>
                            )
                        }
                    </div>

                </div>
            </Container>
            <Trending />


        </div>
    )
}

export default SingleMovie
