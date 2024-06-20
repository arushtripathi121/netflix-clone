import React from 'react';
import MovieContainer from './MovieContainer';
import { useSelector } from 'react-redux';

const PopularMovies = () => {
  const popularMoviesResults = useSelector(store => store.popularMovies?.currentlyPopularMovies);

  if (popularMoviesResults == null) return null; // Return early if popularMoviesResults is null or undefined

  return (
    <div>
      <p className='text-2xl font-semibold'>Movies you may like</p>
      <div className='flex flex-row gap-5'>
        {popularMoviesResults.slice(0,5).map((movie, index) => (
          <MovieContainer key={index} poster={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;

