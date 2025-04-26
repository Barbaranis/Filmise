// src/components/LoginForm.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Identifiants incorrects");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.name || data.username);

      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Connexion</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Se connecter</button>

      {error && <p className="error-message">{error}</p>}

      <p className="switch-link">
        Pas encore de compte ? <Link to="/register">Créer un compte</Link>
      </p>
    </form>
  );
};

export default LoginForm;
