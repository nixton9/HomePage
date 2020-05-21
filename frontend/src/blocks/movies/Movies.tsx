import React from 'react'
import { MovieInterface, GenreInterface } from './MoviesContainer'
import { MoviesBlock } from '../../styles/MoviesBlock'

interface MoviesProps {
  movies: MovieInterface[] | []
  genres: GenreInterface[] | []
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export const Movies: React.FC<MoviesProps> = ({
  movies,
  genres,
  page,
  setPage
}) => {
  const allMovies = (movies as Array<MovieInterface | []>).map(movie => ({
    ...movie,
    // @ts-ignore
    genres: genres.filter(genre => movie.genres.includes(genre.id))
  }))

  return (
    <MoviesBlock>
      <div className="movies">
        {allMovies.length > 0 ? (
          (allMovies as any).map(movie => (
            <div key={movie.id} className="movie">
              <img
                src={`http://image.tmdb.org/t/p/w200/${movie.image}`}
                alt={movie.title}
              />
              {movie.title}
            </div>
          ))
        ) : (
          <div className="movies__nodata">There are no movies to show</div>
        )}
      </div>
      <div className="buttons">
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </MoviesBlock>
  )
}
