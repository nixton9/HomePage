import React, { useState, useEffect } from 'react'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import { Movies } from './Movies'
import axios from 'axios'

export interface MovieInterface {
  id: number
  title: string
  description: string
  releaseDate: string
  image: string
  score: number
  genres: number[]
}

export interface GenreInterface {
  id: number
  name: string
}

const MoviesContainer: React.FC = () => {
  const MOVIES_KEY = process.env.REACT_APP_MOVIES_API_KEY

  const [loading, setLoading] = useState(true)
  const [moviesLoading, setMoviesLoading] = useState(true)
  const [error, setError] = useState('')
  const [movies, setMovies] = useState<[] | MovieInterface[]>([])
  const [genres, setGenres] = useState<[] | GenreInterface[]>([])
  const [page, setPage] = useState(1)

  const fetchMovies = () => {
    setMoviesLoading(true)
    const url = `https://api.themoviedb.org/3/movie/popular?page=${page}`
    axios
      .get(url, { headers: { Authorization: `Bearer ${MOVIES_KEY}` } })
      .then(res => {
        const allMovies: MovieInterface[] = []
        res.data.results.forEach((mov: any) => {
          let movie = {
            id: mov.id,
            title: mov.title,
            description: mov.overview,
            releaseDate: mov.release_date,
            image: mov.poster_path,
            score: mov.vote_average,
            genres: mov.genre_ids
          }
          allMovies.push(movie)
        })
        setMovies(allMovies)
        setMoviesLoading(false)
        setError('')
      })
      .catch(err => {
        setError('There was an error fetching movies')
        setMoviesLoading(false)
      })
  }

  const fetchGenres = () => {
    setLoading(true)
    const url = `https://api.themoviedb.org/3/genre/movie/list`
    axios
      .get(url, { headers: { Authorization: `Bearer ${MOVIES_KEY}` } })
      .then(res => {
        const allGenres: GenreInterface[] = []
        res.data.genres.forEach((gen: any) => {
          let genre = {
            id: gen.id,
            name: gen.name
          }
          allGenres.push(genre)
        })
        setGenres(allGenres)
        setLoading(false)
        setError('')
      })
      .catch(err => {
        setError('There was an error fetching genres')
        setLoading(false)
      })
  }

  const openTrailer = id => {
    const url = `http://api.themoviedb.org/3/movie/${id}/videos`
    axios
      .get(url, { headers: { Authorization: `Bearer ${MOVIES_KEY}` } })
      .then(res => {
        const trailer = res.data.results[0].key
        window.open(`https://www.youtube.com/watch?v=${trailer}`, '_target')
      })
      .catch(err => console.log('Error getting trailer'))
  }

  useEffect(fetchGenres, [])

  useEffect(fetchMovies, [page])

  return (
    <BlockWrapper
      isLoading={loading}
      hasError={Boolean(error)}
      error={error}
      name="Movies"
      page
    >
      <Movies
        movies={movies}
        genres={genres}
        page={page}
        setPage={setPage}
        moviesLoading={moviesLoading}
        openTrailer={openTrailer}
      />
    </BlockWrapper>
  )
}

export default MoviesContainer
