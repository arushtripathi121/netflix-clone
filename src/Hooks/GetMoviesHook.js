import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/popularMoviesSlice';

const GetMoviesHook = (API) => {
    const dispatch = useDispatch();
    const fetchMovies = async () => {
        const data = await fetch(API, API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        fetchMovies();
    }, [])
}

export default GetMoviesHook;
