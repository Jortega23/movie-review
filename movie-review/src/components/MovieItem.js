import React from 'react'

const MovieItem = ({movie: {title, overview, poster_path}}) => {
    return (
        <div className='card text-center'>
            <img 
              src={poster_path}
              alt=''
              style={{ width: '60px'}}
            />
            <h1>{title}</h1>
            <p>{overview}</p>
        </div>
    )
}

export default MovieItem;