import React from 'react'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
  return (
    <div>
      this is the secondary container
    </div>
  )
}

export default SecondaryContainer;
