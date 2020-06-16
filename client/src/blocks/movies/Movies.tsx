import React from 'react'
import { MovieInterface, GenreInterface } from './MoviesContainer'
import { MoviesStyles } from '../../styles/MoviesStyles'
import { Select } from '../../components/Select'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { dateToString } from '../../helpers/date'

interface MoviesProps {
  movies: MovieInterface[] | []
  genres: GenreInterface[] | []
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  selectedGenre: number
  setSelectedGenre: React.Dispatch<React.SetStateAction<number>>
  moviesLoading: boolean
  openTrailer: (id: string) => void
}

export const Movies: React.FC<MoviesProps> = ({
  movies,
  genres,
  page,
  setPage,
  moviesLoading,
  openTrailer,
  selectedGenre,
  setSelectedGenre
}) => {
  const allMovies = (movies as Array<MovieInterface | []>).map(movie => ({
    ...movie,
    displayedGenres: genres
      // @ts-ignore
      .filter(genre => movie.genres.includes(genre.id))
      .map(genre => genre.name)
  }))

  const selectOptions = (genres as GenreInterface[]).map(genre => ({
    val: genre.id,
    name: genre.name
  }))
  selectOptions.unshift({ val: 0, name: 'All' })

  return (
    <MoviesStyles>
      <div className="buttons">
        <div className="buttons__select">
          <Select
            items={selectOptions}
            selectedItem={selectedGenre}
            setSelectedItem={setSelectedGenre}
          />
        </div>
        <div className="buttons__nav">
          <button
            className="prev enlighten-on-hover"
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
          <button
            className="next enlighten-on-hover"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
      <div className="movies">
        {moviesLoading ? (
          <div className="inner-loading">
            <LoadingSpinner />
          </div>
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
                {movie.displayedGenres.map(genre => (
                  <span key={genre}>{genre}</span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="nodata">There are no movies to show</div>
        )}
      </div>
    </MoviesStyles>
  )
}
