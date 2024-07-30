const API_KEY = '922eab02'

export const searchMovies = async ({ search }) => {
  try {
    if (search === '') return null

    if (search) {
      const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
      const data = await response.json()

      const movies = data.Search

      return movies?.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }))
    }
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
