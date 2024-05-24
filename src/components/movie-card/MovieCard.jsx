import "./MovieCard.scss"
import { useState } from "react";

const MovieCard = ({ movie }) => {
    const [actionCard, setActionCard] = useState(false)
    console.log(movie);
    return (
        <div className="movie-card" to={`/movie/${movie.id}`}>
            <span onClick={() => setActionCard(!actionCard)} className="material-symbols-outlined card-action__icon">more_horiz</span>
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://t3.ftcdn.net/jpg/02/35/35/40/360_F_235354051_yz3envzxnH9dulycguP6l4Bh3Xx0BPZ0.jpg'} alt="" />
            <h5 className="movie-title">{movie?.title ? movie?.title?.slice(0, 20) : 'Popular Movie'}</h5>
            <div style={actionCard ? {display: 'flex'} : {display: 'none'}} className="action-card">
                <div className="action-item">
                    <span className="material-symbols-outlined item-icon">lists</span>
                    <strong className="item-text">Add to list</strong>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
