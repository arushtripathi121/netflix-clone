import React from 'react'
import Header from './Header'
import TeleivisionAnimation from './TeleivisionAnimation'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigate = useNavigate();

  function onHandleClick() {
    navigate('\login')
  }

  return (
    <div>
      {/* Hero Section */}
      <div className='w-full bg-cover bg-fixed body border-b-8 border-gray-700 pb-20 sm:pb-40'>
        <div>
          <Header signIn={true} />
        </div>

        <div className='flex flex-col items-center justify-center gap-5 text-white my-10 sm:my-20 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40'>
          <p className='text-4xl sm:text-5xl font-bold text-center'>Unlimited movies, TV shows and more</p>
          <p className='text-lg sm:text-2xl text-center'>Watch anywhere. Cancel anytime.</p>
          <p className='text-base sm:text-xl text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>

        <div className='flex flex-col items-center gap-5 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40'>
          <form onSubmit={e => e.preventDefault()} className='flex flex-col sm:flex-row items-center gap-4 sm:gap-10'>
            <input className='w-full sm:w-96 h-16 p-2 border border-white rounded-sm text-white placeholder-white bg-transparent focus:outline-none' type='text' placeholder='Email or mobile number' />
            <button onClick={() => onHandleClick()} className='bg-red-700 px-6 py-3 font-bold text-white rounded-sm'>
              Get Started
            </button>
          </form>
        </div>
      </div>

      {/* Section 1 */}
      <div className='bg-black text-white flex flex-col sm:flex-row py-10 sm:py-40 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 gap-5 sm:gap-20 border-b-8 border-gray-700'>
        <div className='flex flex-col justify-center sm:w-1/2'>
          <p className='text-2xl sm:text-3xl font-bold'>Enjoy on your TV</p>
          <p className='text-lg sm:text-xl'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>

        <div className='sm:w-1/2'>
          <TeleivisionAnimation />
        </div>
      </div>

      {/* Section 2 */}
      <div className='bg-black text-white flex flex-col sm:flex-row py-10 sm:py-40 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 gap-5 sm:gap-20 border-b-8 border-gray-700'>
        <div className='sm:w-1/2'>
          <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' alt='Download shows' className='w-full' />
        </div>

        <div className='flex flex-col justify-center sm:w-1/2'>
          <p className='text-2xl sm:text-3xl font-bold'>Download your shows to watch offline</p>
          <p className='text-lg sm:text-xl'>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>

      {/* Section 3 */}
      <div className='bg-black text-white flex flex-col sm:flex-row py-10 sm:py-40 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 gap-5 sm:gap-20 border-b-8 border-gray-700'>
        <div className='flex flex-col justify-center sm:w-1/2'>
          <p className='text-2xl sm:text-3xl font-bold'>Create profiles for kids</p>
          <p className='text-lg sm:text-xl'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
        <div className='sm:w-1/2'>
          <img src='https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d' alt='Create profiles' className='w-full' />
        </div>
      </div>
    </div>

  )
}

export default HomePage
