import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/popularMoviesSlice';

const GetMoviesByPopularityHook = () => {
    const dispatch = useDispatch();
    const fetchMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        fetchMovies();
    }, [])
}

export default GetMoviesByPopularityHook;
