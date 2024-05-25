import React from 'react'
import Header from './Header'
import TeleivisionAnimation from './TeleivisionAnimation'

const HomePage = () => {
  return (
    <div>
      <div className='min-h-screen w-full bg-cover bg-fixed body'>
        <div>
          <Header signIn={true} />
        </div>

        <div className=' flex flex-col items-center gap-5 text-white my-36 '>
          <p className='text-5xl font-bold'>Unlimited movies, TV shows and more</p>
          <p className='text-2xl'>Watch anywhere. Cancel anytime.</p>
          <p className='text-xl'>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
      </div>

      <div className='bg-black text-white flex flex-row py-40 px-48 gap-20'>
        <div className='text-3xl flec flex-col'> 
          <p className='font-bold'>Enjoy on your TV</p>
          <p className='text-2xl'>Watch on  smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>

        <div className=''>
          <TeleivisionAnimation/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
