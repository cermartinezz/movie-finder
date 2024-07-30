import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Can not search movies with empty values')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('Search must have letters')
      return
    }

    if (search.length < 3) {
      setError('Search must have more than 3 charactes')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

export const App = () => {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    const value = event.target.value
    if (value.startsWith(' ')) return

    updateSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Search movies</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleChange}
            value={search}
            name='query'
            type='text'
            placeholder='Avengers, Inside Out 2, ...'
          />
          <button>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}
