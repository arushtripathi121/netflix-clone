import React, { useState } from 'react';
import MovieContainer from './MovieContainer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const BrowseMovies = ({MoviesResults}) => {
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(5);

  const onHandleClick = (direction) => {
    console.log(direction);

    if (direction == 'left') {

      if (currentIndex == 15) {
        setCurrentIndex(prevIndex => prevIndex - 15);
        setNextIndex(prevIndex => prevIndex - 15);
        return;
      }
      setCurrentIndex(prevIndex => prevIndex + 5);
      setNextIndex(prevIndex => prevIndex + 5);
    }

    if (direction == 'right') {

      if (currentIndex == 0) {
        setCurrentIndex(prevIndex => prevIndex + 15);
        setNextIndex(prevIndex => prevIndex + 15);
        return;
      }
      setCurrentIndex(prevIndex => prevIndex - 5);
      setNextIndex(prevIndex => prevIndex - 5);
    }

    console.log(currentIndex);
    console.log(nextIndex);
  }

  if (MoviesResults == null) return null; // Return early if popularMoviesResults is null or undefined

  return (
    <div>
      <p className='text-2xl font-semibold ml-10 mt-10'>Movies you may like</p>
      <div className='flex flex-row gap-5 items-center'>
        <button
          className='bg-gray-600 text-white px-1 opacity-60 transition duration-300 ease-in-out hover:opacity-100 transform hover:scale-110'
          onClick={() => onHandleClick('right')}
        >
          <FaChevronLeft className='h-20' />
        </button>
        <div className='flex flex-row gap-5 mt-5'>
          {MoviesResults.slice(currentIndex, nextIndex).map((movie, index) => (
            <MovieContainer key={index} poster={movie.backdrop_path} />
          ))}
        </div>
        <button
          onClick={() => onHandleClick('left')}
          className='bg-gray-600 text-white px-1 opacity-60 transition duration-300 ease-in-out hover:opacity-100 transform hover:scale-110'
        >
          <FaChevronRight className='h-20' />
        </button>
      </div>
    </div>

  );
};

export default BrowseMovies;

