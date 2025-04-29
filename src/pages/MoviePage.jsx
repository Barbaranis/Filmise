import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const MoviePage = () => {
  const { id } = useParams(); // ID du film depuis l'URL
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error(err));


    fetch(`${process.env.REACT_APP_API_URL}/reviews/movie/${id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error(err));
  }, [id]);


  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setError("");


    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ movie_id: id, content }),
      });


      const data = await response.json();


      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de l'ajout de l'avis");
      }


      setReviews([...reviews, { content }]);
      setContent(""); // Reset
    } catch (err) {
      setError(err.message);
    }
  };


  if (!movie) return <p>Chargement...</p>;


  return (
    <div className="movie-page">
      <h1>{movie.title}</h1>
      <img src={movie.image_url} alt={movie.title} />
      <p>{movie.description}</p>


      <h2>Avis des utilisateurs</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review.content}</li>
          ))}
        </ul>
      ) : (
        <p>Pas encore d'avis pour ce film.</p>
      )}


      {token ? (
        <form onSubmit={handleReviewSubmit}>
          <textarea
            placeholder="Écrire votre avis..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit">Envoyer l'avis</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      ) : (
        <p>Connectez-vous pour laisser un avis.</p>
      )}
    </div>
  );
};


export default MoviePage;

