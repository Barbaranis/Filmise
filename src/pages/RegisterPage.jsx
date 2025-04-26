import React from "react";
import RegisterForm from "../components/RegisterForm";
import "../styles/RegisterForm.css";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <h1>Créer un compte</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;

