import React from 'react'
import GetMovieVediosHook from '../Hooks/getMovieVediosHook';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {

  GetMovieVediosHook({ movieId });
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  return (
    <div>
      <iframe src={"https://www.youtube.com/embed/"+trailerVideo?.key}></iframe>
    </div>
  )
}

export default VideoBackground;
