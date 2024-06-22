import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/Constants'

const ShowMoviesHook = (API) => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const data = await fetch(API, API_OPTIONS);
        const json = await data.json();
        setMovies(json.results);
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return movies;
}

export default ShowMoviesHook;
