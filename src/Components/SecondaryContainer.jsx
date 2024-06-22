import React from 'react'
import { useSelector } from 'react-redux';
import GetMoviesByPopularityHook from '../Hooks/getMoviesByPopularityHook';
import BrowseMovies from './BrowseMovies';

const SecondaryContainer = () => {
  GetMoviesByPopularityHook();
  const popularMoviesResults = useSelector(store => store.popularMovies?.currentlyPopularMovies);

  return (
    <div className='flex flex-col gap-10'>
      <BrowseMovies MoviesResults={popularMoviesResults}/>
    </div>
  )
}

export default SecondaryContainer;
