import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // ← correction ici
import "../styles/Navbar.css";


const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      try {
        const decoded = jwtDecode(token); // ← correction ici aussi
        setUsername(decoded.name || decoded.username || "Utilisateur");
      } catch (err) {
        console.error("Erreur lors du décodage du token :", err);
        setUsername("Utilisateur");
      }
    } else {
      setIsAuthenticated(false);
      setUsername("");
    }
  }, [location]);


  const toggleMenu = () => setIsOpen(!isOpen);


  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };


  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";


  return (
    <nav className="navbar">
      <h1 className="logo">Filmise</h1>


      <div className="burger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>


      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {isAuthenticated && (
          <li className="greeting-burger">{username}</li>
        )}


        {isAuthenticated ? (
          <>
            <li><Link to="/home">Accueil</Link></li>
            <li><Link to="/profile">Profil</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Déconnexion
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {!isAuthPage && (
              <>
                <li><Link to="/login">Connexion</Link></li>
                <li><Link to="/register">Inscription</Link></li>
              </>
            )}
          </>
        )}
      </ul>


      {isAuthenticated && !isOpen && (
        <div className="greeting-desktop">{username}</div>
      )}
    </nav>
  );
};


export default Navbar;

