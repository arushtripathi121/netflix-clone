import React from 'react'
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import MoviesInfoPage from './MoviesInfoPage';
import MovieGPT from './MovieGPT';
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
      path: '/movieRecomendatationSystem',
      element: <MovieGPT/>
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
