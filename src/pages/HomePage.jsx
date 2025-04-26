import React from "react";
import Carrousel from "../components/Carrousel";
import MovieSection from "../components/MovieSection";

const dummyImages = [
  "/images/movie1.jpg",
  "/images/movie2.jpg",
  "/images/movie3.jpg",
];

const dummyMovies = [
  { title: "Dragon Heart", image: "/images/movie1.jpg", description: "Un royaume menacé par un dragon mystique." },
  { title: "Mystic Blade", image: "/images/movie2.jpg", description: "Un héros solitaire maniant une épée légendaire." },
  { title: "Chroniques d'Éther", image: "/images/movie3.jpg", description: "Un voyage magique dans un monde parallèle." },
];

const HomePage = () => {
  return (
    <div className="homepage">
      <Carrousel images={dummyImages} />
      <MovieSection title="Films recommandés" movies={dummyMovies} />
    </div>
  );
};

export default HomePage;

