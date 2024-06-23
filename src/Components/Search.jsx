import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import GetMovieslIstHook from '../Hooks/GetMovieslIstHook';

const Search = () => {
    const [search, setSearch] = useState('');
    GetMovieslIstHook(search);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8">
            <div className="relative mt-6">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <BiSearch className="h-5 w-5 text-gray-500" />
                </span>
                <input
                    value={search}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm text-black font-serif font-bold focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                    placeholder="Search movies or series..."
                />
            </div>
        </div>
    );
};

export default Search;

