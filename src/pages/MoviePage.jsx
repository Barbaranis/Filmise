// src/pages/MoviePage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MoviePage.css";


const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/movies/${id}`);
        if (!response.ok) {
          throw new Error("Film non trouvé");
        }
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };


    fetchMovie();
  }, [id]);


  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error}</p>;


  return (
    <div className="movie-page">
      <h2>{movie.title}</h2>
      <img src={movie.image_url || "/images/default.jpg"} alt={movie.title} />
      <p>{movie.description}</p>
      <p><strong>Catégorie :</strong> {movie.category}</p>
      <p><strong>Date de sortie :</strong> {movie.release_date}</p>


      {/* Partie avis bientôt ici */}
    </div>
  );
};


export default MoviePage;

