import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { FaPlay } from "react-icons/fa";
import SecondaryContainer from './SecondaryContainer';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute px-20 space-y-5 mt-20 text-white w-full aspect-video bg-gradient-to-b from-transparent to-black">
      <div className=' space-y-10'>
        <p className=' text-5xl font-bold mt-40'>{title}</p>
        <p className='w-96'>{overview}</p>
      </div>


      <div className='flex flex-row gap-5 text-xl'>
        <button className='flex flex-row items-center gap-3 bg-white text-black px-3 py-2 font-semibold'> <FaPlay /> Play</button>
        <button className='flex flex-row items-center gap-3 bg-gray-500 text-white px-3 py-2 font-semibold'><AiOutlineExclamationCircle />More Info</button>
      </div>

      <div><SecondaryContainer/></div>
    </div>
  )
}

export default VideoTitle
