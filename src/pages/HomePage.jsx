// src/pages/HomePage.jsx
import React, { useEffect, useState } from "react";
import Carrousel from "../components/Carrousel";
import MovieSlider from "../components/MovieSlider";
import FilterBar from "../components/FilterBar";
import API from "../api";


const dummyImages = [
  "/images/netflix1.jpg",
  "/images/netflix2.jpg",
  "/images/netflix3.jpg",
];


const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [filter, setFilter] = useState("all");


  useEffect(() => {
    API.get("/movies")
      .then((response) => {
        const all = response.data;
        setMovies(all.filter(item => item.type === "film"));
        setSeries(all.filter(item => item.type === "serie"));
      })
      .catch((error) => {
        console.error("Erreur de chargement des films/séries :", error);
      });
  }, []);


  const filteredMovies = filter === "film" ? movies : filter === "serie" ? series : [...movies, ...series];


  return (
    <div className="homepage">
      <Carrousel images={dummyImages} />
      <FilterBar setFilter={setFilter} />
      
      <h2 className="section-title">Nouveautés</h2>
      <MovieSlider movies={filteredMovies.slice(0, 8)} />


      <h2 className="section-title">Tendances</h2>
      <MovieSlider movies={filteredMovies.slice(8, 16)} />


      <h2 className="section-title">Films populaires</h2>
      <MovieSlider movies={movies} />


      <h2 className="section-title">Séries du moment</h2>
      <MovieSlider movies={series} />
    </div>
  );
};


export default HomePage;

