import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
    return (
        <div className=' w-[600px]'>

                <input className='w-full border border-white text-white font-bold px-4 py-3 rounded-lg opacity-50 bg-black' type='text' placeholder='Enter Movie or Series'>
                </input>
        </div>
    )
}

export default Search
