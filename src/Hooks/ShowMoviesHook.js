import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies, addTrendingContent, addTrendingMovies, addTrendingShows, addMoviesToWatch } from '../utils/movieSlice';

const ShowMoviesHook = (API, Store) => {
    const dispatch = useDispatch();

    const fetchMovies = async () => {
        const response = await fetch(API, API_OPTIONS);
        const json = await response.json();
        switch(Store) {
            case 'popularMovies':
                dispatch(addPopularMovies(json.results));
                break;
            case 'trendingMovies':
                dispatch(addTrendingMovies(json.results));
                break;
            case 'trendingShows':
                dispatch(addTrendingShows(json.results));
                break;
            case 'trendingContent':
                dispatch(addTrendingContent(json.results));
                break;
            case 'moviesToWatch':
                dispatch(addMoviesToWatch(json.results));
            default:
                console.error('Invalid store key provided');
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [API, Store, dispatch]);
};

export default ShowMoviesHook;
