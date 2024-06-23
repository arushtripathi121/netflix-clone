import React from 'react';
import { Link } from 'react-router-dom';

const MovieContainer = ({ poster, id, mode, page }) => {
    return (
        <div>
            <Link to={`/movies/${page}/${mode}/${id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="Movie Poster"/>
            </Link>
        </div>
    );
};

export default MovieContainer;
