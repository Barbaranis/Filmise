import React from "react";
import "../styles/MovieCard.css";

const MovieCard = ({ title, image, description }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default MovieCard;
