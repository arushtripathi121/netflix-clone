import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if(movies == null) {
    return;
  }
  const newMovie = movies[4];
  console.log(newMovie);

  const {original_title, overview, id} = newMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} movieId={id} mode={movies.movie_type}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
