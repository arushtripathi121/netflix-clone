import React, { useEffect } from 'react'
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import { auth } from '../utils/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
const Body = () => {

  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/browse',
      element: <Browse />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
      }
    });
  }, [])

  return (
    <div>
      <div className=' '>
        <RouterProvider router={appRouter} />
      </div>
    </div>

  )
}

export default Body;
