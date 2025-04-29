import React from "react";
import "../styles/Carrousel.css";


const Carrousel = ({ images = [] }) => {
  return (
    <div className="carrousel-strip">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`carousel-${index}`} className="carrousel-strip-img" />
      ))}
    </div>
  );
};


export default Carrousel;

