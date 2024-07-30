import { useState } from 'react'

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
      fetch(`https://www.omdbapi.com/?s=${search}&apikey=922eab02`)
        .then(res => res.json())
        .then(data => setResponseMovies(data))
    } else {
      setResponseMovies(withoutResult)
    }
  }

  return { movies, getMovies }
}
