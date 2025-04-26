import React from "react";
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h2>À propos de Filmise</h2>

      <p>
        <strong>Filmise</strong> est une plateforme conçue par des passionnés de cinéma, pour les passionnés de cinéma. Que vous soyez fan de blockbusters, amateur de films d’auteur ou à la recherche de perles rares, notre objectif est de vous offrir un espace où vous pouvez explorer, découvrir, et partager vos coups de cœur cinématographiques.
      </p>

      <p>
        Le projet est né de l’envie de combiner technologie et amour du 7e art. Filmise vous propose une interface simple et immersive pour naviguer parmi des centaines de films, consulter leurs détails, lire les avis d'autres utilisateurs et même partager les vôtres.
      </p>

      <p>
        Au-delà de l'aspect fonctionnel, Filmise se veut aussi une communauté. Chaque membre peut créer un compte, noter les films, écrire des critiques et interagir avec d'autres cinéphiles. Plus qu’un simple site de streaming ou d’information, c’est un lieu d’échange autour du cinéma.
      </p>

      <p>
        Ce projet a été entièrement développé dans le cadre d’un apprentissage full-stack JavaScript. Il repose sur une architecture moderne : React pour le frontend, Node.js et Express pour le backend, et MySQL pour la base de données.
      </p>

      <p>
        Merci d’utiliser Filmise. Ce n’est que le début de l’aventure, et de nombreuses fonctionnalités sont encore à venir : recommandations personnalisées, listes de visionnage, suggestions par humeur, et bien plus encore.
      </p>

      <p>
        Bon film sur Filmise !
      </p>
    </div>
  );
};

export default AboutPage;
