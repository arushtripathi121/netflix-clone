import react, { useEffect } from 'react';
import netflixLogo from './../Logos/Netflix-Logo.wine.svg'
import { Link } from 'react-router-dom';

const Header = ({ signIn }) => {


    console.log('value of sign in is : ', signIn);
    return (
        <div className='flex justify-between items-center mx-40'>
            <Link to={'/'}><img
                src={netflixLogo}
                className=' w-56' />
            </Link>

            <Link to={'/login'}>
            {signIn  ?
                <button className='rounded-lg bg-red-600 w-20 h-10 text-white font-semibold'>Sign In</button>
                : ''}
            </Link>
        </div>
    )
}

export default Header;
