import { useEffect, useState } from "react";
import { Container } from "../../utils/Utils"
import "./Movies.scss"
import { Button, Input, Radio } from "antd"
import { useGetAllMovies } from "../../service/query/useGetAllMovies";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { useSearchMovie } from "../../service/query/useSearchMovie";
import TrendSidebar from "../../components/trend-sidebar/TrendSidebar";

const btnOption = ['movies', 'series', 'cartoon', 'adventure', 'drama', 'comedy']


const Movies = () => {

    const [inputValue, setInputValue] = useState("")
    const { data: moviesData } = useGetAllMovies("trending/all/day")

    const { data: searchedData } = useSearchMovie(inputValue)

    const [selectOption, setSelectOption] = useState(false)
    const [selectIndex, setSelectIndex] = useState(0)

 


    return (
        <div className="movies">
            <Container>
                <div className="movies-wrapper">
                    <form className="movie__search-form">
                        <Input onChange={(e) => setInputValue(e.target.value)} placeholder="Search Movie" />
                        <Button><SearchOutlined /></Button>
                    </form>
                    <div className="category-option">
                        {
                            btnOption.map((btn, index) =>
                                <Button style={selectIndex === index}
                                    className={selectIndex === index ? 'selected-btn' : ''} onClick={() => setSelectIndex(index)} key={index}>{btn}</Button>
                            )
                        }

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
                                : moviesData?.map(movie =>
                                    <Link to={`/movie/${movie?.id}`} className="movie-card" key={movie.id}>
                                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                                        <h5 className="movie-title">{movie?.title ? movie?.title?.slice(0, 35) : 'Popular Movie'}</h5>
                                        
                                    </Link>
                                )
                        }
                    </div>
                    <div className="trend__movie-wrapper">
                        <h4 className="trend-title">Trends Now</h4>
                        <div className="trend__card-wrapper">
                            <TrendSidebar />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Movies
