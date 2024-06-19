import React  from 'react'
import BrowseHeader from './BrowseHeader'
import useNowPlayingHook from '../Hooks/useNowPlayingHook'
import MainContainer from './MainContainer'

const Browse = () => {
  useNowPlayingHook();
  return (
    <div className='browse h-screen'>
      <div><BrowseHeader /></div>
      
      <div className='text-white'>
        <MainContainer/>
      </div>
    </div>
  )
}

export default Browse;
