// src/App.js


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage"; 
import ScrollToTop from "./components/ScrollToTop"; 


import "./styles/Navbar.css";
import "./styles/Footer.css";
import "./styles/App.css"; 


function App() {
  const isAuthenticated = !!localStorage.getItem("token");
  const isAdmin = localStorage.getItem("role") === "admin"; // <-- stocke le rôle dans le localStorage au login


  return (
    <Router>
      <ScrollToTop /> {/* Pour remonter en haut à chaque changement de page */}
      <div className="App">
        <Navbar />


        <Routes>
          {/* Redirection par défaut vers /login */}
          <Route path="/" element={<Navigate to="/login" />} />


          {/* Auth */}
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />}
          />
          <Route
            path="/register"
            element={isAuthenticated ? <Navigate to="/home" /> : <RegisterPage />}
          />


          {/* Pages privées */}
          <Route
            path="/home"
            element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/movies/:id"
            element={isAuthenticated ? <MoviePage /> : <Navigate to="/login" />}
          />


          {/* Page admin (admin seulement) */}
          <Route
            path="/admin"
            element={isAuthenticated && isAdmin ? <AdminPage /> : <Navigate to="/home" />}
          />


          {/* Pages publiques */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>


        <Footer />
      </div>
    </Router>
  );
}


export default App;

