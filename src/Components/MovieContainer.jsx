import React from 'react'

const MovieContainer = ({poster}) => {


    return (
        <div>
            <div>
                <img className='w-auto h-auto' src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="no" />
            </div>
        </div>
    )
}

export default MovieContainer
