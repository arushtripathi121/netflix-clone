import React from 'react'
import ShowMovies from './ShowMovies';

const TertiaryContainer = () => {

  return (
    <div className='flex flex-col gap-10'>
      <ShowMovies API={'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'} title={'Popular Movies'}/>
      <ShowMovies API={'https://api.themoviedb.org/3/trending/movie/day?language=en-US'} title={'Trending Movies'}/>
      <ShowMovies API={'https://api.themoviedb.org/3/trending/tv/day?language=en-US'} title={'Trending Shows'}/>
      <ShowMovies API={'https://api.themoviedb.org/3/trending/all/day?language=en-US'} title={'TV shows and movies you must watch'}/>
    </div>
  )
}

export default TertiaryContainer;
