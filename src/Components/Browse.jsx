import React from 'react'
import useNowPlayingHook from '../Hooks/useNowPlayingHook'
import MainContainer from './MainContainer'
import BrowseHeader from './BrowseHeader';

const Browse = () => {
  useNowPlayingHook();
  return (
    <div className='relative'>
      <div className='absolute top-0 left-0  w-full bg-gradient-to-b from-black to-transparent'>
        <BrowseHeader />
      </div>
      <div className='mt'>
        <MainContainer />
      </div>
    </div>

  )
}

export default Browse;
