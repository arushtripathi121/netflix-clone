import React from 'react';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import Search from './Search';
import { useSelector } from 'react-redux';

const MovieGPT = () => {

    const movieList = useSelector(store.movie?.recomendedMovies);

    return (
        <div className='bg-gray-900 text-white min-h-screen'>
            {/* Close Button */}
            <div className='fixed top-4 right-4 z-50'>
                <Link to='/browse'>
                    <IoCloseSharp className='w-10 h-10 text-white hover:text-red-400 transition duration-300' />
                </Link>
            </div>

            {/* Main Content */}
            <div className='flex flex-col items-center justify-center h-full'>
                <p className='text-red-400 font-bold text-5xl mb-8 font-serif italic'>CineSuggest</p>
                <div className='w-full max-w-md'>
                    <Search />
                </div>
            </div>
        </div>
    );
}

export default MovieGPT;
