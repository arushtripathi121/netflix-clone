import React from 'react'
import ShowMovies from './ShowMovies';

const TertiaryContainer = () => {

  return (
    <div className='flex flex-col gap-10 mt-20'>
      <ShowMovies API={'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'} title={'Popular Movies'} Store={'popularMovies'}/>
      <ShowMovies API={'https://api.themoviedb.org/3/trending/movie/day?language=en-US'} title={'Trending Movies'} Store ={'trendingMovies'}/>
      <ShowMovies API={'https://api.themoviedb.org/3/trending/tv/day?language=en-US'} title={'Trending Shows'} Store ={'trendingShows'}/>
      <ShowMovies API={'https://api.themoviedb.org/3/trending/all/day?language=en-US'} title={'TV shows and movies you must watch'} Store ={'trendingContent'}/>
    </div>
  )
}

export default TertiaryContainer;
