// a container for all the Movie components and their data.
import { useEffect, useState } from 'react';
import { movies } from '../data/movies';
import './movies.css';
import StarRating from '../components/StarRating';
import ReviewList from '../components/Reviewlist';




const fetchMovies = () => {
  return movies;
};

const MovieList = () => {
  console.log(fetchMovies());

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movies = fetchMovies();
    console.log('MovieList: useEffect: movies: ', movies);
    setMovies(movies);
  }, []);

  return(
    <div className="movie-container">
      <h2>Movies</h2>
      <ul className ="movie-list">
        {movies.map(movie => (
          <li key={movie.id} className="movie">
            <img src={movie.poster} alt={movie.title} />
            <StarRating />  
          </li>
        ))}
      </ul> 
    </div>
    
  );
};

export default MovieList;










// import React from 'react';
// import movie from '../data/movies';
// import StarRating from '../components/StarRating';


// const MovieList = ({movie}) => {
//     return movie.map((movie, index) => {
//         return (
//             <ul key={index}>
//                 <li>Movie: {movie.name}</li>
//                 <li>Synopsis: {movie.synopsis}</li>
//                 <StarRating />
//             </ul>
            
//         );
//     });
// };

// export default MovieList;

