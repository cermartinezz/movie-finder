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

  useEffect(() => {
    if (query === '') {
      setError('Can not search movies with empty values')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('no se puede buscar una pelicula con numero')
      return
    }

    if (query.length < 3) {
      setError('la busqueda debe tener mas de 3 caracteres')
      return
    }

    setError(null)
  }, [query])

  const handleOnChange = (event) => {
    const value = event.target.value
    setQuery(value)
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
