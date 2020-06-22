import React, { useState, useEffect } from 'react'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import { Movies } from './Movies'
import axios from 'axios'

interface MoviesContainerProps {
  tvShows?: boolean
}

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

const MoviesContainer: React.FC<MoviesContainerProps> = ({ tvShows }) => {
  const MOVIES_KEY = process.env.REACT_APP_MOVIES_API_KEY

  const [loading, setLoading] = useState(true)
  const [moviesLoading, setMoviesLoading] = useState(true)
  const [error, setError] = useState('')
  const [movies, setMovies] = useState<[] | MovieInterface[]>([])
  const [genres, setGenres] = useState<[] | GenreInterface[]>([])
  const [selectedGenre, setSelectedGenre] = useState(0)
  const [page, setPage] = useState(1)

  const fetchData = () => {
    setMoviesLoading(true)
    const type = tvShows ? 'tv' : 'movie'
    const url = Number(selectedGenre)
      ? `https://api.themoviedb.org/3/${type}/popular?page=${page}&with_genres=${selectedGenre}`
      : `https://api.themoviedb.org/3/${type}/popular?page=${page}`
    axios
      .get(url, { headers: { Authorization: `Bearer ${MOVIES_KEY}` } })
      .then(res => {
        const allMovies: MovieInterface[] = []
        res.data.results.forEach((mov: any) => {
          let movie = {
            id: mov.id,
            title: tvShows ? mov.original_name : mov.title,
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
    const type = tvShows ? 'tv' : 'movie'
    const url = `https://api.themoviedb.org/3/genre/${type}/list`
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
    const type = tvShows ? 'tv' : 'movie'
    const url = `http://api.themoviedb.org/3/${type}/${id}/videos`
    axios
      .get(url, { headers: { Authorization: `Bearer ${MOVIES_KEY}` } })
      .then(res => {
        const trailer = res.data.results[0].key
        window.open(`https://www.youtube.com/watch?v=${trailer}`, '_target')
      })
      .catch(err => console.log('Error getting trailer'))
  }

  useEffect(fetchGenres, [])

  useEffect(fetchData, [page, selectedGenre])

  return (
    <BlockWrapper
      isLoading={loading}
      hasError={Boolean(error)}
      error={error}
      name={tvShows ? 'TV Shows' : 'Movies'}
      page
    >
      <Movies
        movies={movies}
        genres={genres}
        page={page}
        setPage={setPage}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        moviesLoading={moviesLoading}
        openTrailer={openTrailer}
      />
    </BlockWrapper>
  )
}

export default MoviesContainer
