import React from 'react';
import Carrousel from '../components/Carrousel';
import LoginForm from '../components/LoginForm';
import '../styles/LoginPage.css';


const backgroundImages = [
  "/images/netflix1.jpg",
  "/images/netflix2.jpg",
  "/images/netflix3.jpg",
  "/images/netflix4.jpg",
  "/images/netflix6.jpg",
  "/images/netflix7.jpg",
  "/images/netflix8.jpg",
  "/images/netflix9.jpg",
  "/images/netflix10.jpg",
  "/images/netflix11.jpg",
  "/images/netflix12.jpg",
  "/images/netflix13.jpg",

];


const LoginPage = () => {
  return (
    <div className="login-page">
      <Carrousel images={backgroundImages} />
      <div className="login-container">
        <LoginForm />
      </div>
    </div>
  );
};


export default LoginPage;





