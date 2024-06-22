import React, { useEffect } from 'react'
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import { useDispatch } from 'react-redux';
import MoviesInfoPage from './MoviesInfoPage';
import MovieContainer from './MovieContainer';
import VideoPlayer from './VideoPlayer';
const Body = () => {


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
    {
      path: 'movies/:mode/:id',
      element: <MoviesInfoPage/>
    },{
      path: 'watch/:id',
      element: <VideoPlayer/>
    }
  ]);

  return (
    <div>
      <div className=' '>
        <RouterProvider router={appRouter} />
      </div>
    </div>

  )
}

export default Body;
