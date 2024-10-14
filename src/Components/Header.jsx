import React from 'react';
import netflixLogo from './../Logos/Netflix-Logo.wine.svg';
import { Link } from 'react-router-dom';

const Header = ({ signIn }) => {
    return (
        <div className='flex justify-between items-center mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-40 py-4'>
            {/* Netflix Logo */}
            <Link to={'/'}>
                {/* <img src={netflixLogo} className='w-48 sm:w-56' alt='Netflix Logo' /> */}
                <div class="bg-black p-6 flex items-center space-x-2">
                    <div class="text-red-500 font-bold text-5xl">
                        Cine
                    </div>
                    <div class="text-gray-300 font-bold text-5xl">
                        Suggest
                    </div>
                    <div class="flex items-center justify-center w-8 h-8">
                        <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 16l4-4m0 0l-4-4m4 4H8m8 0l-4-4m0 0l4-4m-4 4h8" />
                        </svg>
                    </div>
                </div>

            </Link>

            {/* Sign In Button */}
            <Link to={'/login'}>
                {signIn ? (
                    <button className='rounded-lg bg-red-600 px-4 py-2 text-white font-semibold text-sm sm:text-base'>
                        Sign In
                    </button>
                ) : null}
            </Link>
        </div>
    );
};

export default Header;
