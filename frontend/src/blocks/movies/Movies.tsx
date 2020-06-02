import React from 'react'
import { MovieInterface, GenreInterface } from './MoviesContainer'
import { MoviesStyles } from '../../styles/MoviesStyles'
import { dateToString } from '../../helpers/date'

interface MoviesProps {
  movies: MovieInterface[] | []
  genres: GenreInterface[] | []
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  moviesLoading: boolean
  openTrailer: (id: string) => void
}

export const Movies: React.FC<MoviesProps> = ({
  movies,
  genres,
  page,
  setPage,
  moviesLoading,
  openTrailer
}) => {
  const allMovies = (movies as Array<MovieInterface | []>).map(movie => ({
    ...movie,
    genres: genres
      // @ts-ignore
      .filter(genre => movie.genres.includes(genre.id))
      .map(genre => genre.name)
  }))

  return (
    <MoviesStyles>
      <div className="buttons">
        <button
          className="prev"
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button className="next" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
      <div className="movies">
        {moviesLoading ? (
          <div className="inner-loading">Loading movies ...</div>
        ) : allMovies.length > 0 ? (
          (allMovies as any).map(movie => (
            <div
              key={movie.id}
              className="movie"
              onClick={() => openTrailer(movie.id)}
            >
              <div
                className="movie__img"
                style={{
                  backgroundImage: `url(http://image.tmdb.org/t/p/w300${movie.image})`
                }}
              >
                <span className="movie__score">{movie.score}</span>
                <div className="movie__meta">
                  <div className="movie__meta__intro">
                    <span className="movie__meta__date">
                      {dateToString(movie.releaseDate, true)}
                    </span>
                    <span className="movie__meta__score">{movie.score}</span>
                  </div>
                  <div className="movie__meta__desc">
                    <p>{movie.description}</p>
                  </div>
                </div>
              </div>
              <h3 className="movie__title">{movie.title}</h3>
              <div className="movie__genres">
                {movie.genres.map(genre => (
                  <span key={genre}>{genre}</span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="movies__nodata">There are no movies to show</div>
        )}
      </div>
    </MoviesStyles>
  )
}
