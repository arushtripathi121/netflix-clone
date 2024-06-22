import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { FaPlay } from "react-icons/fa";
import SecondaryContainer from './SecondaryContainer';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute space-y-5 mt-80 text-white w-full bg-gradient-to-b from-transparent to-black">
      <div className='px-20 space-y-5'>
        <p className='text-5xl font-bold'>{title}</p>
        <p className='w-2/5'>{overview}</p>
      </div>

      <div className='px-20 flex flex-row gap-5 text-xl'>
        <button className='flex flex-row items-center gap-3 bg-white text-black px-5 py-3 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-gray-300'>
          <FaPlay /> Play
        </button>
        <button className='flex flex-row items-center gap-3 bg-gray-700 text-white px-5 py-3 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-gray-600'>
          <AiOutlineExclamationCircle /> More Info
        </button>
      </div>

      <div className="mt-5 w-screen">
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default VideoTitle;
