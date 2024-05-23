import { useEffect, useState } from "react";
import { CardSkeleton, Container } from "../../utils/Utils"
import "./Movies.scss"
import { Button, Input, Radio, Select } from "antd"
import { useGetAllMovies } from "../../service/query/useGetAllMovies";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSearchMovie } from "../../service/query/useSearchMovie";
import TrendSidebar from "../../components/trend-sidebar/TrendSidebar";
import Aos from "aos";
import { instance } from "../../api";
import { useGetGenreMovie } from "../../service/query/useGetGenresMovie";
import RecommendSidebar from "../../components/recommend-sidebar/RecommendSidebar";


const API_KEY = "e8146ffd5337cb04d8fa4a759df0d413"
const Movies = () => {

    useEffect(() => {
        Aos.init()
    }, [])


    // HOOKS
    const [inputValue, setInputValue] = useState("")
    const [optionItem, setOptionItem] = useState('')
    const [genreList, setGenreList] = useState([])

    const genreOptions = genreList.map(genre => ({ value: genre.id, label: genre.name }))

    // QUERY SELECT
    const { data: genreData } = useGetGenreMovie(optionItem)
    const { data: searchedData } = useSearchMovie(inputValue)
    const { data: moviesData } = useGetAllMovies("trending/all/day")


    useEffect(() => {
        async function LoadMovieGenre() {
            try {
                const response = await instance.get(`/genre/tv/list?api_key=${API_KEY}`)
                setGenreList(response?.data.genres)
            }
            catch (error) {
                console.log(error);
            }
        }
        LoadMovieGenre()
    }, [])

    const handleChange = (value) => {
        setOptionItem(value)
    };

    return (
        <div className="movies">

            <div className="movies-banner">
                <img data-aos='fade-up' data-aos-delay='200' className="banner-image" src="https://ratatum.com/wp-content/uploads/2018/03/1_jfR0trcAPT3udktrFkOebA-min.jpeg" />
                <div data-aos='fade-up' data-aos-delay='200' className="movies__banner-content">
                    <h3 data-aos='fade-up' data-aos-delay='600' className="content-subtitle">Free Movies to Watch, Anytime Anywhere.</h3>
                    <p data-aos='fade-up' data-aos-delay='600' className="content-description">The search is over! Let Plex help you find the perfect movie to watch tonight for free.</p>
                    <Button data-aos='fade-up' data-aos-delay='600' className="content__watch-btn">Watch Free</Button>
                </div>
            </div>

            <Container>
                <div className="movies-wrapper">
                    <div  className="search__form-wrapper">

                        <form className="movie__search-form">
                            <Input onChange={(e) => setInputValue(e.target.value)} placeholder="Search Movie" />
                            <Button><SearchOutlined /></Button>
                        </form>
                        <Select className="category-select"
                            defaultValue="Select Genre"
                            onChange={handleChange}
                            options={genreOptions}
                        />
                    </div>

                </div>
                <h2 className="movies-title">All Movies</h2>
                <div className="movies__main-wrapper">

                    <div className="movies__card-wrapper">
                        {
                            searchedData?.length > 0 ? searchedData?.map(movie =>
                                <Link to={`/movie/${movie?.id}`} className="movie-card" key={movie.id}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                                    <h5 className="movie-title">{movie?.title ? movie?.title?.slice(0, 20) : 'Popular Movie'}</h5>
                                </Link>
                            )
                                : genreData?.results?.length > 0 ? genreData?.results?.map(movie =>
                                    <Link to={`/movie/${movie?.id}`} className="movie-card" key={movie.id}>
                                        
                                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                                        <h5 className="movie-title">{movie?.title ? movie?.title?.slice(0, 35) : 'Popular Movie'}</h5>
                                    </Link>
                                )
                                     : moviesData ? moviesData?.slice(6, 20).map(movie =>
                                        <Link to={`/movie/${movie?.id}`} className="movie-card" key={movie.id}>
                                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                                            <h5 className="movie-title">{movie?.title ? movie?.title?.slice(0, 35) : 'Popular Movie'}</h5>

                                        </Link>
                                    ) : <CardSkeleton/>
                        }
                    </div>
                    <div className="movies__sidebar-wrapper">

                    <div className="trend__movie-wrapper">
                        <h4 className="trend-title">Trends Now</h4>
                        <div className="trend__card-wrapper">
                            <TrendSidebar />
                        </div>
                    </div>
                    <div className="recommend__movie-wrapper">
                        <h4 className="recommend-title">Recommended </h4>
                        <div className="recommend__card-wrapper">
                            <RecommendSidebar/>
                        </div>
                    </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Movies
