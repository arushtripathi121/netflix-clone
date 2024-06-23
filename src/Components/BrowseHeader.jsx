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
    const user = useSelector(store => store.user?.user)
    const [showProfile, setShowProfile] = useState(false);
    const handleSignOut = () => {
        signOut(auth).then(() => { }).catch((error) => {
            // An error happened.
            navigate('/error');
        });

    }

    const handleShowProfile = () => {
        setShowProfile(!showProfile);
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

    if (!user) return;
    const { displayName, email } = user;
    const name = displayName;
    const userEmail = email;

    return (
        <div className='flex px-20 justify-between'>

            <Link to={'/browse'}><img
                src={netflixLogo}
                className=' w-36' />
            </Link>

            {user &&
                <div className='flex flex-row items-center gap-10'>
                    <Link to={'/movieRecomendatationSystem'}><div className='text-white bg-red-600 px-2 py-2 rounded-lg mt-5'>Movie Recomendation System</div></Link>
                    <div className='flex'>
                        <button className='mt-5 flex flex-col items-center' onClick={() => handleShowProfile()}>
                            {showProfile ? '' : <img src={user.photoURL} alt="user icon" className='w-10' />}
                            {!showProfile ? '' :
                                <div className='mt-10 flex flex-col items-center bg-red-600 px-4 py-2 rounded-xl text-white absolute right-0 top-14 z-10 sm:px-6 md:px-8 lg:px-10 xl:px-12 sm:py-3 md:py-4 lg:py-5 xl:py-6'>
                                    <p className='font-medium mt-2'>Account Owner: {name}</p>
                                    <p className='text-sm mb-2'>Email: {userEmail}</p>
                                    <button onClick={() => handleSignOut()}
                                        className='bg-red-600 text-white font-semibold px-4 py-2 rounded-md mt-3 hover:bg-red-500 transition-colors duration-300'>
                                        Sign out
                                    </button>
                                </div>
                            }


                        </button>
                    </div>
                </div>
            }

        </div>
    )
}

export default BrowseHeader
