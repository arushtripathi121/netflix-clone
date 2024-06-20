import React from 'react'
import GetMovieVediosHook from '../Hooks/getMovieVediosHook';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {

  GetMovieVediosHook({ movieId });

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>

    </div>
  )
}

export default VideoBackground;
