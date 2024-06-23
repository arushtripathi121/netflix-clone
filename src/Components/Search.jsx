import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
        <div className=' w-[600px]'>
            <form className='flex  gap-2'>
                <input className='w-full border border-white text-white font-bold px-4 py-3 rounded-lg opacity-50 bg-black' type='text' placeholder='Enter Movie or Series'>
                </input>
                <button>
                    <p className='text-black flex items-center text-xl bg-white rounded=lg font-bold px-2 py-1'><BiSearch className='w-6 h-auto' />Search</p>
                </button>
            </form>
        </div>
    )
}

export default Search
