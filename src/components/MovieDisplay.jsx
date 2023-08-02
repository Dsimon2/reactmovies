import React from "react";
import styled from "styled-components";

const Title = styled.h1`
font-size: 3em
color:red
`;

function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <div>
        <Title>{movie.Title}</Title>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
        <h2>Movie Actors: {movie.Actors}</h2>
        <h2>Movie Director: {movie.Director}</h2>
        <h2>Movie Awards: {movie.Awards}</h2>
      </div>
    );
  };

  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };
  return movie ? loaded() : loading();
}

export default MovieDisplay;
