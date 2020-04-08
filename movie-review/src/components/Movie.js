import React from 'react'
import MovieItem from './MovieItem'

const Movie = ({ movies }) => {
    console.log(movies)
    return (
        <div style={movieStyle}>
           {movies.map(movie => (
               <MovieItem movie={movie} id={movie.id}/>
           ))}
        </div>
    )
}

const movieStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '1rem'
}
export default Movie;