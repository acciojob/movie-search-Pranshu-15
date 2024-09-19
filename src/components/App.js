import React from "react";
import './../styles/App.css';
import SearchBar from './SearchBar';
import Error from './Error';
import MovieList from './MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  
  const searchMovies = async (query) => {
    setError(false);
    const API_KEY = '99eb9fd1';
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const data = await response.json();
  
    if (data.Response === 'True') {
      setMovies(data.Search);
    } else {
      setError(true);
    }
  };
  return (
    <div>
        {/* Do not remove the main div */}
<h1>Hello</h1>
<SearchBar onSearch={searchMovies} />
{error && <Error />}
<MovieList movies={movies} />
    </div>
  )
}

export default App


