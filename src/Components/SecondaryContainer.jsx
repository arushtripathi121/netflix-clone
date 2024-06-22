import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import GetMoviesByPopularityHook from '../Hooks/getMoviesByPopularityHook';
import PopularMovies from './PopularMovies';

const SecondaryContainer = () => {
  GetMoviesByPopularityHook();

  return (
    <div className='flex flex-col gap-10'>
      <PopularMovies/>
    </div>
  )
}

export default SecondaryContainer;
