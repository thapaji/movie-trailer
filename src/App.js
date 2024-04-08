import { useState } from "react";
import "./App.css";
import { DisplayCards } from "./components/DisplayCards";
import { SearchForm } from "./components/SearchForm";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  const addToMovieList = (movie) => {
    const tempArr = movieList.filter((item) => item.imdbID !== movie.imdbID);
    setMovieList([...tempArr, movie]);
  };

  const handleOnDelete = (imdbID) => {
    if (!window.confirm("Are you sure you want to delete?")) return;
    const tempArr = movieList.filter((item) => item.imdbID !== imdbID);
    setMovieList(tempArr);
  };

  return (
    <div className="container text-warning">
      <div className="row">
        <div className="col">
          <h1>My Movie Collections!</h1>
        </div>
      </div>
      <hr />
      {/* Search Section */}
      <SearchForm addToMovieList={addToMovieList} />
      <DisplayCards movieList={movieList} handleOnDelete={handleOnDelete} />
      {/* Movie list Section */}
    </div>
  );
};

export default App;