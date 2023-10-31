import './App.css';
import movies from './assets/movies';
import MovieList from './components/MovieList';


function App() {

  return (
    <div>
      <h1>My first dynamic react application!</h1>
      <MovieList movies={movies} headingText='My movie list' />

    </div>
  )
}

export default App
