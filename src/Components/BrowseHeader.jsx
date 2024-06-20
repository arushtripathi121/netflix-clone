import React, { useEffect, useState } from 'react'
import netflixLogo from './../Logos/Netflix-Logo.wine.svg'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';

const BrowseHeader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => { }).catch((error) => {
            // An error happened.
            navigate('/error');
        });

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })

                );    // ...
                navigate('/browse')
            }

            else {
                // User is signed out
                // ...
                dispatch(removeUser())
                navigate('/')
            }
        });
    }, [])

    return (
        <div className='flex px-20 justify-between'>
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
