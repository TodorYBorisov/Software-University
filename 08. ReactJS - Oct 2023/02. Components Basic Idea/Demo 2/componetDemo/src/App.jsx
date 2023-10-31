import './App.css';
import movies from './assets/movies';
import MovieList from './components/MovieList';
import Timer from './components/Timer';


function App() {

  return (
    <div>
      <Timer startTime={5} />
      <h1>My first dynamic react application!</h1>
      <MovieList movies={movies} headingText='My movie list' />


    </div>
  )
}

export default App
