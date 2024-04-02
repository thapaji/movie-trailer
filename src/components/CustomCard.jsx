import React from "react";

export const CustomCard = ({ searchedMovie }) => {
  const { Poster, Title, imdbRating, Plot } = searchedMovie;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={Poster} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">Rating: {imdbRating}</p>
        <p className="card-text">{Plot?.slice(0, 50)}..</p>
      </div>
      <div className="">
        <button className="btn btn-warning">Drama</button>
        <button className="btn btn-info">Action</button>
      </div>
      <div className="d-grid mt-2 mb-5">
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};
