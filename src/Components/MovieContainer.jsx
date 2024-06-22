import React from 'react'

const MovieContainer = ({poster, id}) => {


    return (
        <div>
            <button>
                <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="no" />
            </button>
        </div>
    )
}

export default MovieContainer
