import React, { useState } from 'react';
import MovieContainer from './MovieContainer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BrowseMovies = ({ MoviesResults, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalMovies = MoviesResults ? MoviesResults.length : 0; // Ensure MoviesResults is not null

  const onHandleClick = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const maxIndex = Math.max(totalMovies - 5, 0); // Ensure maxIndex doesn't go negative

    if (direction === 'left') {
      setCurrentIndex(prevIndex => (prevIndex <= 0 ? maxIndex : prevIndex - 5));
    } else if (direction === 'right') {
      setCurrentIndex(prevIndex => (prevIndex >= maxIndex ? 0 : prevIndex + 5));
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Duration should match the CSS transition duration
  };

  if (!MoviesResults) return null; // Render nothing if MoviesResults is null or undefined

  return (
    <div className="mx-auto container mt-10">
      <p className='text-2xl font-semibold mb-5 ml-5'>{title}</p>
      <div className='flex items-center relative'>
        {/* Left arrow button */}
        <button
          className='absolute left-0 bg-gray-600 text-white p-3 rounded-full opacity-60 transition duration-300 ease-in-out hover:opacity-100 transform hover:scale-110 z-10'
          onClick={() => onHandleClick('left')}
        >
          <FaChevronLeft className='h-6 w-6' />
        </button>

        {/* Movie carousel container */}
        <div className='overflow-hidden flex-grow mx-5'>
          <div
            className={`flex transition-transform duration-500 ease-in-out`}
            style={{ transform: `translateX(-${currentIndex * (100 / 8)}%)` }}
          >
            {/* Displaying all movies */}
            {MoviesResults.map((movie, index) => (
              <div key={index} className='w-64 flex-shrink-0 p-1'>
                <div>
                  {/* Using MovieContainer component */}
                  <MovieContainer poster={movie.poster_path} id={movie.id} mode={movie.media_type} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow button */}
        <button
          className='absolute right-0 bg-gray-600 text-white p-3 rounded-full opacity-60 transition duration-300 ease-in-out hover:opacity-100 transform hover:scale-110 z-10'
          onClick={() => onHandleClick('right')}
        >
          <FaChevronRight className='h-6 w-6' />
        </button>
      </div>
    </div>
  );
};

export default BrowseMovies;
