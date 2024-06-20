import React from 'react'

const MovieContainer = ({poster}) => {


    return (
        <div className='mt-10'>
            <div className='w-64 h-48'>
                <img className='w-64 h-48' src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="no" />
            </div>
        </div>
    )
}

export default MovieContainer
