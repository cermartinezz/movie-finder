import { useEffect, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

export const App = () => {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(query)
  }

  const handleOnChange = (event) => {
    const value = event.target.value
    setQuery(value)

    if (value === '') {
      setError('Can not search movies with empty values')
      return
    }

    if (value.match(/^\d+$/)) {
      setError('Search must have letters')
      return
    }

    if (value.length < 3) {
      setError('Search must have more than 3 characters')
      return
    }

    setError(null)
  }

  return (
    <div className='page'>
      <header>
        <h1>Search movies</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleOnChange} name='query' type='text' placeholder='Avengers, Inside Out 2, ...' />
          <button>Search</button>
        </form>
        {error && <p>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}
