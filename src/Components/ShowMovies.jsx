import React from 'react';
import ShowMoviesHook from '../Hooks/ShowMoviesHook';
import BrowseMovies from './BrowseMovies';
import { useSelector } from 'react-redux';

const ShowMovies = ({ API, title, Store }) => {

  ShowMoviesHook(API, Store);
  const movies = useSelector(store => store.movies?.[Store]);
  if(Store == 'trendingContent'){
    console.log(movies);
  }

  return (
    <div className='text-white'>
      <BrowseMovies MoviesResults={movies} title={title} />
    </div>
  );
};

export default ShowMovies;

