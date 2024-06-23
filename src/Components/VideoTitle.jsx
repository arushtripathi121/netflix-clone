import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { FaPlay } from "react-icons/fa";
import SecondaryContainer from './SecondaryContainer';
import { Link } from 'react-router-dom';

const VideoTitle = ({ title, overview, movieId, mode }) => {
  return (
    <div className="absolute space-y-5 mt-40 text-white w-full bg-gradient-to-b from-transparent to-black">
      <div className='px-5 sm:px-8 md:px-12 lg:px-20 space-y-2'>
        <p className='text-3xl sm:text-2xl md:text-3xl font-bold'>{title}</p>
        <p className='text-base sm:text-lg md:text-xl w-3/6'>{overview}</p>
      </div>

      <div className='px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col sm:flex-row gap-3 sm:gap-5 text-base sm:text-xl'>
        <Link to={`/movies/${mode}/${movieId}`}><button className='flex items-center gap-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-gray-300'>
          <FaPlay/><span className="hidden sm:inline">Play</span>
        </button></Link>
        <Link to={`/movies/${mode}/${movieId}`}><button className='flex items-center gap-2 bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-gray-600'>
          <AiOutlineExclamationCircle /> <span className="hidden sm:inline">More Info</span>
        </button></Link>
      </div>

      <div className="mt-2 px-4 sm:px-0">
        <SecondaryContainer />
      </div>
    </div>

  );
};

export default VideoTitle;
