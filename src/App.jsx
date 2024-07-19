import './App.css'
import { Movies } from './components/Movies'
import moviesResponse from './mocks/movies.json'

export const App = () => {
  const movies = moviesResponse.Search

  const parsedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster

  }))

  return (
    <div className='page'>
      <header>
        <h1>Search movies</h1>
        <form className='form'>
          <input type='text' placeholder='Avengers, Inside Out 2, ...' />
          <button>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={parsedMovies} />
      </main>
    </div>
  )
}
