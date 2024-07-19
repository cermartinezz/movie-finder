import { useRef } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

export const App = () => {
  const { movies } = useMovies()
  const inputRef = useRef() // <- no abusar de esto

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = inputRef.current.value
    console.log(value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Search movies</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input ref={inputRef} type='text' placeholder='Avengers, Inside Out 2, ...' />
          <button>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}
