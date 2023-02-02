import './App.css';
import Navbar from './components/Navbar';
import MovieList from './movies/MovieList';




function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieList />

    </div>
  );
}

export default App;