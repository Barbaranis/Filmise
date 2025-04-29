import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/RegisterForm.css";


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");


    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });


      const data = await response.json();


      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de l’inscription");
      }


      setMessage("Compte créé avec succès !");
      setFormData({ username: "", email: "", password: "" });


      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Inscription</h2>


      <input
        type="text"
        name="username"
        placeholder="Nom d'utilisateur"
        value={formData.username}
        onChange={handleChange}
        required
      />


      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />


      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        value={formData.password}
        onChange={handleChange}
        required
      />


      <button type="submit">Créer mon compte</button>


      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}


      <p className="switch-link">
        Déjà inscrit ? <Link to="/login">Retour à la connexion</Link>
      </p>
    </form>
  );
};


export default RegisterForm;

