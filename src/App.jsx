import { useRef } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

export const App = () => {
  const { movies } = useMovies()
  const inputRef = useRef()

  const handleClick = () => {
    // current es nativa de react y siempre que se quiera acceder
    // a un valor por referencia usando useRef siempre se tiene que acceder mediante el current
    // ya que al ser un objeto puede cambiar el valor de value
    const value = inputRef.current.value
    console.log(value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Search movies</h1>
        <form className='form'>
          <input ref={inputRef} type='text' placeholder='Avengers, Inside Out 2, ...' />
          <button onClick={handleClick}>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}
