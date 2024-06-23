import React from 'react';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import Search from './Search';

const MovieGPT = () => {
    return (
        <div className='browse w-screen min-h-screen flex flex-col'>
            <div className='fixed top-0 right-0 m-4'>
                <Link to={'/browse'}>
                    <IoCloseSharp className='w-10 h-auto text-white' />
                </Link>
            </div>

            <div className='flex flex-col items-center mt-20'>
                <p className=' text-red-400 opacity-70 font-bold text-7xl mb-10 font-serif italic'>CineSuggest</p>
                <div className='mb-4'><Search /></div>
            </div>
        </div>
    );
}

export default MovieGPT;
