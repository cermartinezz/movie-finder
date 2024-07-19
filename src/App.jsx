import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

export const App = () => {
  const { movies } = useMovies()

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
        <Movies movies={movies} />
      </main>
    </div>
  )
}
