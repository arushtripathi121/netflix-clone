import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import GetMovieslIstHook from '../Hooks/GetMovieslIstHook';
import { BiSearch } from 'react-icons/bi';
import BrowseMovies from './BrowseMovies';
import { addRecomendedMovies } from '../utils/movieSlice';

const MovieGPT = () => {

    const [search, setSearch] = useState('');
    const results = GetMovieslIstHook(search);
    console.log(results);
    const dispatch = useDispatch();
    dispatch(addRecomendedMovies(results));
    const result = useSelector(store => store.movies?.recomendedMovies);
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className='bg-gray-900 text-white min-h-screen'>
            {/* Close Button */}
            <div className='fixed top-4 right-4 z-50'>
                    <Link to={'/browse'}><IoCloseSharp className='w-10 h-10 text-white hover:text-red-400 transition duration-300' /></Link>
            </div>

            {/* Main Content */}
            <div className='flex flex-col items-center justify-center h-full'>
                <p className='text-red-400 font-bold text-5xl mb-8 font-serif italic'>CineSuggest</p>
            </div>

            <div className='w-full max-w-md'>
                <div className="w-screen px-4 sm:px-6 md:px-8 mx-auto mt-8">
                    <div className="flex relative mt-6 bg-white rounded-lg shadow-md">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <BiSearch className="h-5 w-5 text-gray-500" />
                        </span>
                        <input
                            value={search}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-black font-serif font-bold sm:text-sm"
                            type="text"
                            placeholder="Search movies or series..."
                        />
                    </div>
                </div>
            </div>
            <div>
                {results.length != 0 &&
                    <div className="w-full mt-6">
                        <BrowseMovies MoviesResults={results} title={`Results for: ${search}`} movieGPT={'movieGPT'} />
                    </div>
                }

                {
                    results.length == 0 &&
                    <p  className=" px-32 w-full mt-6">Loading.....</p>
                }
            </div>
        </div>
    );
}

export default MovieGPT;
