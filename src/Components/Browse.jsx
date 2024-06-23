import React from 'react'
import useNowPlayingHook from '../Hooks/useNowPlayingHook'
import MainContainer from './MainContainer'
import BrowseHeader from './BrowseHeader';
import TertiaryContainer from './TertiaryContainer';

const Browse = () => {
  useNowPlayingHook();

  return (
    <div>
        <div className='browse relative'>
          <div className='absolute top-0 left-0  w-full bg-gradient-to-b from-black to-transparent'>
            <BrowseHeader />
          </div>
          <div className=''>
            <MainContainer />
          </div>
          <TertiaryContainer />
        </div>
    </div>


  )
}

export default Browse;
