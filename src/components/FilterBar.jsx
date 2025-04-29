// src/components/FilterBar.jsx
import React from "react";
import "../styles/FilterBar.css";


const FilterBar = ({ setFilter }) => {
  return (
    <div className="filter-bar">
      <button onClick={() => setFilter("all")}>Tous</button>
      <button onClick={() => setFilter("film")}>Films</button>
      <button onClick={() => setFilter("serie")}>Séries</button>
    </div>
  );
};


export default FilterBar;

