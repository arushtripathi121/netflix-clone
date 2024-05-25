import React, { useState } from 'react'
import netflixLogo from './../Logos/Netflix-Logo.wine.svg'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useSelector } from 'react-redux'

const BrowseHeader = () => {
    const navigate = useNavigate()
    const user = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');
        }).catch((error) => {
            // An error happened.
            navigate('/error');
        });
    }
    return (
        <div className='flex justify-between px-20 pt-2 items-center'>
            <Link to={'/browse'}><img
                src={netflixLogo}
                className=' w-36' />
            </Link>

            {user &&
                <div className='flex gap-5 items-center'>
                    <img src={user.photoURL} alt="user icon" className='w-10' />
                    <button onClick={() => handleSignOut()} className=' bg-red-600 text-white font-semibold px-5 py-1 rounded-'>Sign out</button>
                </div>
            }

        </div>
    )
}

export default BrowseHeader
