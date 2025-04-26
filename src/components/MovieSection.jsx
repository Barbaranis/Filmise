import React from "react";
import MovieCard from "./MovieCard";

const MovieSection = ({ movies, title }) => {
  return (
    <section className="movie-section">
      <h2>{title}</h2>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            image={movie.image}
            description={movie.description}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
