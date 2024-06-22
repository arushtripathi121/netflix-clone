import React from 'react';
import netflixLogo from './../Logos/Netflix-Logo.wine.svg';
import { Link } from 'react-router-dom';

const Header = ({ signIn }) => {
    return (
        <div className='flex justify-between items-center mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-40 py-4'>
            {/* Netflix Logo */}
            <Link to={'/'}>
                <img src={netflixLogo} className='w-48 sm:w-56' alt='Netflix Logo' />
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
