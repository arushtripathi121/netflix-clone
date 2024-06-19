import React from 'react'
import GetMovieVediosHook from '../Hooks/getMovieVediosHook';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {

  GetMovieVediosHook({ movieId });
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  return (
    <div>
      <iframe
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&disablekb=1&fs=0&iv_load_policy=3&playsinline=1&showinfo=0&enablejsapi=1&widget_referrer=${window.location.origin}`}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>


    </div>
  )
}

export default VideoBackground;
