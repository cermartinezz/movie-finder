import moviesResponse from '../mocks/movies.json'

export function useMovies () {
  const rawMovies = moviesResponse.Search
  const movies = rawMovies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster

  }))

  return { movies }
}
