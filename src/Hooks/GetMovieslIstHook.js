import React, { useEffect, useState } from 'react'
import { addRecomendedMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/Constants';

const GetMovieslIstHook = (name) => {
    const [results, setResults] = useState([]);

    const fetchMovies = async (name) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/multi?query=${name}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter(movie => movie.media_type == 'tv' || movie.media_type == 'movie');
        setResults(filterData);
    }
    useEffect(() => {
        let timer = setTimeout(() => {
            fetchMovies(name)
        }, 3000)
        return () => clearTimeout(timer);
    }, [name]);

    return results;
}

export default GetMovieslIstHook;