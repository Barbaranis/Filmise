// src/components/MovieSection.jsx
import React from "react";
import MovieCard from "./MovieCard";
import "../styles/MovieSection.css";


const MovieSection = ({ movies }) => {
  return (
    <div className="movie-section">
      <div className="movie-slider">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};


export default MovieSection;

