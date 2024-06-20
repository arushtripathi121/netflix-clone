import React, { useEffect, useState } from 'react'
import netflixLogo from './../Logos/Netflix-Logo.wine.svg'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { RiArrowUpWideFill } from 'react-icons/ri'


const BrowseHeader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector(store => store.user)
    const [showProfile, setShowProfile] = useState(false);
    const handleSignOut = () => {
        signOut(auth).then(() => { }).catch((error) => {
            // An error happened.
            navigate('/error');
        });

    }

    const handleShowProfile = () =>{
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

    if(!user) return;
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
                <div className='flex item gap-5'>
                    
                    
                    <button className='mt-5 flex flex-col items-center' onClick={() => handleShowProfile()}>
                        {showProfile? '' : <img src={user.photoURL} alt="user icon" className='w-10' />}
                        {!showProfile? '' : <div  className='mt-10 flex flex-col items-center bg-red-600 px-10 py-2 rounded-xl text-white'>
                            <button className=' text-end' onClick={() => handleShowProfile()} ><RiArrowUpWideFill className="text-4xl w-8 h-8" /></button>
                            <p>Account Owner: {name} </p>
                            <p>Email: {userEmail}</p>
                        </div>}
                    </button>


                    <button onClick={() => handleSignOut()} className=' bg-red-600 text-white font-semibold px-5 py-1 rounded-md h-11 mt-5 hover:bg-red-500 transition-colors duration-300'>Sign out</button>
                </div>
            }

        </div>
    )
}

export default BrowseHeader
