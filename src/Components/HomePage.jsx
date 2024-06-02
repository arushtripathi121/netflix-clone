import React from 'react'
import Header from './Header'
import TeleivisionAnimation from './TeleivisionAnimation'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigate = useNavigate();

  function onHandleClick(){
    navigate('\login')
  }

  return (
    <div>
      <div className='w-full bg-cover bg-fixed body border-b-8 border-gray-700 pb-40'>
        <div>
          <Header signIn={true} />
        </div>

        <div className=' flex flex-col items-center gap-5 text-white my-20'>
          <p className='text-5xl font-bold'>Unlimited movies, TV shows and more</p>
          <p className='text-2xl'>Watch anywhere. Cancel anytime.</p>
          <p className='text-xl'>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        
        <div className='flex flex-col items-center gap-5 '>
          <form onClick={e => e.preventDefault()} className='flex flex-row gap-10'>
            <input className=' w-96 h-16 p-2 signin-box border border-white rounded-sm text-white' type='text' placeholder='Email or mobile number'></input>
            <button onClick={()=>onHandleClick()} className=' bg-red-700 px-4 py-2 font-bold text-white'>Get Started</button>
          </form>
        </div>
      </div>

      <div className='bg-black text-white flex flex-row py-40 px-48 gap-20 border-b-8 border-gray-700'>
        <div className='text-3xl flec flex-col'> 
          <p className='font-bold'>Enjoy on your TV</p>
          <p className='text-2xl'>Watch on  smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>

        <div className=''>
          <TeleivisionAnimation/>
        </div>
      </div>

      <div className='bg-black text-white items-center flex flex-row py-40 px-48 gap-20 border-b-8 border-gray-700'>
        <div className=''>
          <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'/>
        </div>

        <div className='text-3xl flec flex-col'> 
          <p className='font-bold'>Download your shows to watch offline</p>
          <p className='text-2xl'>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>

      <div className='bg-black text-white flex flex-row items-center py-40 px-48 gap-20 border-b-8 border-gray-700'>

        <div className='text-3xl flec flex-col'> 
          <p className='font-bold'>Create profiles for kids</p>
          <p className='text-2xl'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
        <div className=''>
          <img src='https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d'/>
        </div>
      </div>

    </div>
  )
}

export default HomePage
