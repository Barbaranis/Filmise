// src/components/MovieCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MovieCard.css";


const MovieCard = ({ movie }) => {
  const navigate = useNavigate();


  return (
    <div className="movie-card" onClick={() => navigate(`/movies/${movie.id}`)}>
      <img src={movie.image_url} alt={movie.title} />
      <div className="overlay">
        <button className="view-more">Voir plus</button>
      </div>
      <h3>{movie.title}</h3>
    </div>
  );
};


export default MovieCard;

