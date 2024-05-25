import React from 'react'
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
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
  ])
  return (
    <div>
      <div className=' '>
        <RouterProvider router={appRouter} />
      </div>
    </div>

  )
}

export default Body;
