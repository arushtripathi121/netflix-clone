import React, { useState, useEffect } from 'react';
import MovieContainer from './MovieContainer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BrowseMovies = ({ MoviesResults, title, page }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerPage(5);
      } else if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    window.addEventListener('resize', updateItemsPerPage);
    updateItemsPerPage();

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalMovies = MoviesResults ? MoviesResults.length : 0;

  const onHandleClick = (direction) => {
    const maxIndex = Math.max(totalMovies - itemsPerPage, 0);

    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }
  };

  if (!MoviesResults) return null;

  return (
    <div className="mx-auto container mt-10 px-4">
      <p className="text-2xl font-semibold mb-5">{title}</p>
      <div className="relative flex items-center">
        {currentIndex > 0 && (
          <button
            className="absolute left-0 bg-gray-600 text-white p-3 rounded-full opacity-60 transition duration-300 ease-in-out hover:opacity-100 transform hover:scale-110 z-10"
            onClick={() => onHandleClick('left')}
          >
            <FaChevronLeft className="h-6 w-6" />
          </button>
        )}
        <div className="overflow-hidden flex-grow mx-5">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {MoviesResults.map((movie, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              >
                <MovieContainer poster={movie.poster_path} id={movie.id} mode={movie.media_type} page={page} />
              </div>
            ))}
          </div>
        </div>
        {currentIndex < Math.max(totalMovies - itemsPerPage, 0) && (
          <button
            className="absolute right-0 bg-gray-600 text-white p-3 rounded-full opacity-60 transition duration-300 ease-in-out hover:opacity-100 transform hover:scale-110 z-10"
            onClick={() => onHandleClick('right')}
          >
            <FaChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default BrowseMovies;
