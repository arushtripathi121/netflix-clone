import React from 'react'
import { useSelector } from 'react-redux';
import GetMoviesHook from '../Hooks/GetMoviesHook';
import BrowseMovies from './BrowseMovies';

const SecondaryContainer = () => {
  GetMoviesHook('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1');
  const popularMoviesResults = useSelector(store => store.popularMovies?.currentlyPopularMovies);

  return (
    <div className='flex flex-col gap-10'>
      <BrowseMovies MoviesResults={popularMoviesResults} title={'Movies to Watch'}/>
    </div>
  )
}

export default SecondaryContainer;
