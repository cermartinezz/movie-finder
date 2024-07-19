import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

export const App = () => {
  const { movies } = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    // this is a more native way to fetch all inputs from a form but this way is more DOM oriented (vanilla js)
    // and no a React way (un-controlled way to manage data) ventages more simple an optimal performace
    const { query } = Object.fromEntries(new window.FormData(event.target))
    console.log(query)
  }

  return (
    <div className='page'>
      <header>
        <h1>Search movies</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' type='text' placeholder='Avengers, Inside Out 2, ...' />
          <button>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}
