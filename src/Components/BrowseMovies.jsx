import React, { useState } from 'react';
import MovieContainer from './MovieContainer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BrowseMovies = ({ MoviesResults, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const onHandleClick = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const totalMovies = MoviesResults.length;
    const maxIndex = totalMovies - 5;

    if (direction === 'left') {
      if (currentIndex >= maxIndex) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(prevIndex => prevIndex + 5);
      }
    }

    if (direction === 'right') {
      if (currentIndex === 0) {
        setCurrentIndex(maxIndex);
      } else {
        setCurrentIndex(prevIndex => prevIndex - 5);
      }
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Duration should match the CSS transition duration
  };

  if (MoviesResults == null) return null;

  return (
    <div className="mx-auto container mt-10">
      <p className='text-2xl font-semibold mb-5 ml-5'>{title}</p>
      <div className='flex items-center'>
        <button
          className='bg-gray-600 text-white p-3 rounded-full opacity-60 transition duration-300 ease-in-out hover:opacity-100 transform hover:scale-110'
          onClick={() => onHandleClick('right')}
        >
          <FaChevronLeft className='h-6 w-6' />
        </button>
        <div className='overflow-hidden w-full mx-5'>
          <div
            className={`flex transition-transform duration-500 transform ${isAnimating ? 'ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100 / 8}%)` }}
          >
            {MoviesResults.slice(0, 20).map((movie, index) => (
              <div key={index} className='w-64 flex-shrink-0 p-1'>
                <div>
                  <MovieContainer poster={movie.poster_path} id={movie.id} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => onHandleClick('left')}
          className='bg-gray-600 text-white p-3 rounded-full opacity-60 transition duration-300 ease-in-out hover:opacity-100 transform hover:scale-110'
        >
          <FaChevronRight className='h-6 w-6' />
        </button>
      </div>
    </div>
  );
};

export default BrowseMovies;
