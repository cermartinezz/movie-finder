import { useState } from 'react'
import withResult from '../mocks/movies.json'
import withoutResult from '../mocks/no-results.json'

export function useMovies ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])

  const rawMovies = responseMovies.Search

  const movies = rawMovies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      setResponseMovies(withResult)
    } else {
      setResponseMovies(withoutResult)
    }
  }

  return { movies, getMovies }
}
