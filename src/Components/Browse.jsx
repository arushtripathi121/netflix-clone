import React  from 'react'
import BrowseHeader from './BrowseHeader'
import useNowPlayingHook from '../Hooks/useNowPlayingHook'
import MainContainer from './MainContainer'

const Browse = () => {
  useNowPlayingHook();
  return (
    <div className='h-screen relative'>
      <div className='header-box absolute top-0 left-0 w-full'>
        <BrowseHeader />
      </div>
      
      <div className='text-white'>
        <MainContainer/>
      </div>
    </div>
  )
}

export default Browse;

