import React from 'react';
import { useSelector } from 'react-redux';
import BrowseMovies from './BrowseMovies';
import ShowMoviesHook from '../Hooks/ShowMoviesHook';

const SecondaryContainer = () => {
  ShowMoviesHook(
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    'moviesToWatch'
  );

  const movies = useSelector(store => store.movies?.moviesToWatch);

  return (
    <div className='flex flex-col gap-5 sm:gap-10 px-4 sm:px-8 md:px-12 lg:px-20'>
      {/* BrowseMovies Component */}
      <BrowseMovies MoviesResults={movies} title={'Movies to Watch'} />
    </div>
  );
};

export default SecondaryContainer;
