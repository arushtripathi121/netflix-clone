import { useEffect, useState } from 'react';
import { API_OPTIONS } from "../utils/Constants";

const useGetMovieDisplayVideo = (id, mode) => {
  const [results, setResults] = useState(null);

  const getMovieVideos = async () => {
    const endpoint = mode === 'tv' 
      ? `https://api.themoviedb.org/3/tv/${id}/videos` 
      : `https://api.themoviedb.org/3/movie/${id}/videos`;

    const data = await fetch(endpoint, API_OPTIONS);
    const json = await data.json();
    const filterData = json.results.filter(video => video.type === 'Trailer' && video.size === 2160);
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setResults(trailer);
    console.log(trailer);
  }

  useEffect(() => {
    getMovieVideos();
  }, [id, mode]);

  return results;
}

export default useGetMovieDisplayVideo;
