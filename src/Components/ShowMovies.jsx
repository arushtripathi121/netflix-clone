import React from 'react'
import ShowMoviesHook from '../Hooks/ShowMoviesHook'
import BrowseMovies from './BrowseMovies';

const ShowMovies = ({API, title}) => {
    const results = ShowMoviesHook(API);
    console.log('results'+ results);
  return (
    <div className='text-white'>
      <BrowseMovies MoviesResults={results} title={title}/>
    </div>
  )
}

export default ShowMovies;