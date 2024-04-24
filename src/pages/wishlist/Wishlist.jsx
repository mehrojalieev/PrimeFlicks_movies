import React from 'react'
import './Wishlist.scss'
import { Container } from '../../utils/Utils'
import { useStore } from '../../zustand/store/useStore'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

const Wishlist = () => {

    const { MoviesData, isLoading, isSuccess, setMoviesData, setRemoveMovie } = useStore()
    console.log(MoviesData);

    return (
        <div className='wishlist'>
            <Container>
                <h3 className='wishlist-title'>Wishlists</h3>
                <div className="wishlist__card-wrapper">
                    {
                        MoviesData?.map(movie =>
                            <div className="wishlist-card">
                                <Link key={movie.id} to={`/movie/${movie.id}`} className='wishlist__card-link'>
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie?.title} />
                                </Link>
                                <p className='movie-title'>{movie?.title?.slice(0, 27)}</p>
                                <Button onClick={() => setRemoveMovie(movie)} className='remove-btn'>Remove form Wishlist</Button>
                            </div>
                        )
                    }
                </div>
            </Container>
        </div>
    )
}

export default Wishlist
