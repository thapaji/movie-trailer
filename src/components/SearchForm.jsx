import React, { useState, useEffect } from "react";
import { CustomCard } from "./CustomCard";
import { fetchFromAPI } from "../helpers/axiosHelper";
import { randomChar } from "../helpers/helpers";

export const SearchForm = ({ addToMovieList }) => {
  const [searchStr, setSearchStr] = useState("");
  const [searchedMovie, setSearchedMovie] = useState({});

  useEffect(() => {
    const c = randomChar();
    console.log(c);
    fetchMovie(c);
  }, []);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchStr(value);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    fetchMovie(searchStr);
  };
  const fetchMovie = async (str) => {
    const movie = await fetchFromAPI(str);
    setSearchedMovie(movie);
  };

  const handleOnDelete = ()=>{
    setSearchedMovie([]);
  }

  const addMovie = (movie)=>{
    addToMovieList(movie);
  }

  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <div className="row g-5">
        <div className="col-md d-flex  aligns-center">
          <form action="" onSubmit={handleOnSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search Movie.."
                onChange={handleOnChange}
                required
              ></input>
            </div>
            <div className="d-grid">
              <button className="btn btn-warning">Search</button>
            </div>
          </form>
        </div>
        <div className="col-md">
          {searchedMovie?.Response === "True" ? (
            <CustomCard addToMovieList={addMovie} searchedMovie={searchedMovie} handleOnDelete={handleOnDelete}/>
          ) : (
            <div className="alert alert-danger">{searchedMovie.Error}</div>
          )}
        </div>
      </div>
    </div>
  );
};
