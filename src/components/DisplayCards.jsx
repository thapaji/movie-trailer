import React, { useEffect, useState } from "react";
import { CustomCard } from "./CustomCard";

export const DisplayCards = ({ movieList, handleOnDelete }) => {
  const [displayMovie, setDisplayMovie] = useState([]);

  useEffect(() => {
    setDisplayMovie(movieList);
  }, [movieList]);

  const filterByType = (mode) => {
    setDisplayMovie(movieList.filter((movie) => movie.mode === mode));
  };

  return (
    <div className="bg-black mt-5 p-5 rounded">
      <div className="row">
        <div className="col">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              onClick={() => setDisplayMovie(movieList)}
              type="button"
              className="btn btn-secondary"
            >
              ALL
            </button>
            <button
              onClick={() => {
                filterByType("drama");
              }}
              type="button"
              className="btn btn-warning"
            >
              DRAMA
            </button>
            <button
              onClick={() => {
                filterByType("action");
              }}
              type="button"
              className="btn btn-info"
            >
              ACTION
            </button>
          </div>
        </div>
      </div>
      <p>{displayMovie.length} movies displayed...</p>
      <div className="row">
        {displayMovie.map((movie) => {
          return (
            <div className="col-sm">
              <CustomCard
                searchedMovie={movie}
                filterByType={filterByType}
                handleOnDelete={handleOnDelete}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
