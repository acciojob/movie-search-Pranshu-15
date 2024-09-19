import React from 'react';

const MovieList = ({ movies }) => {
    console.log(movies)
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <ul>
            <li>
          <h3>{movie.Title} ({movie.Year})</h3>
          <img src={movie.Poster} alt={movie.Title} />
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
