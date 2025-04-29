import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Ajouté pour l'icône profil
import "../styles/Navbar.css";


const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [location]);


  const toggleMenu = () => setIsOpen(!isOpen);


  return (
    <nav className="navbar">
      <Link to="/home" className="logo">
        <img src="/images/LogoFilmise.jpg" alt="Filmise Logo" className="logo-image" />
      </Link>


      <div className="burger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>


      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/about">À propos</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {isAuthenticated && (
          <li>
            <Link to="/profile" className="profile-link-mobile">
              <FaUserCircle size={22} />
            </Link>
          </li>
        )}
      </ul>


      {isAuthenticated && !isOpen && (
        <Link to="/profile" className="profile-link-desktop">
          <FaUserCircle size={28} />
        </Link>
      )}
    </nav>
  );
};


export default Navbar;

