// src/pages/AdminPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "../styles/AdminPage.css";


const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetchUsers();
    fetchMovies();
  }, []);


  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get("/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Erreur chargement users:", error);
    }
  };


  const fetchMovies = async () => {
    try {
      const response = await API.get("/movies");
      setMovies(response.data);
    } catch (error) {
      console.error("Erreur chargement movies:", error);
    }
  };


  const handleDeleteUser = async (id) => {
    if (window.confirm("Supprimer cet utilisateur ?")) {
      try {
        const token = localStorage.getItem("token");
        await API.delete(`/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchUsers(); // Recharge la liste
      } catch (error) {
        console.error("Erreur suppression user:", error);
      }
    }
  };


  const handleDeleteMovie = async (id) => {
    if (window.confirm("Supprimer ce film ?")) {
      try {
        const token = localStorage.getItem("token");
        await API.delete(`/movies/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchMovies(); // Recharge la liste
      } catch (error) {
        console.error("Erreur suppression film:", error);
      }
    }
  };


  const handleBackHome = () => {
    navigate("/home");
  };


  return (
    <div className="admin-page">
      <h1>Espace Admin</h1>


      <div className="admin-section">
        <h2>Utilisateurs</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td data-label="ID">{user.id}</td>
                <td data-label="Nom">{user.name || "Nom inconnu"}</td>
                <td data-label="Email">{user.email}</td>
                <td data-label="Action">
                  <button onClick={() => handleDeleteUser(user.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="admin-section">
        <h2>Films & Séries</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Titre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td data-label="ID">{movie.id}</td>
                <td data-label="Titre">{movie.title}</td>
                <td data-label="Action">
                  <button onClick={() => handleDeleteMovie(movie.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button onClick={handleBackHome} className="back-home-btn">
          Retour Accueil
        </button>
      </div>
    </div>
  );
};


export default AdminPage;

