import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api'; // Assure-toi que tu as bien un fichier api.js pour axios
import Footer from '../components/Footer';
import '../styles/ProfilePage.css';


const ProfilePage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});


  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await API.get('/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfo(response.data);
    } catch (error) {
      console.error('Erreur lors du chargement du profil :', error);
    }
  };


  useEffect(() => {
    fetchUserInfo();
  }, []);


  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };


  return (
    <div className="profile-page">
      <h1>Bienvenue sur ton profil !</h1>


      <div className="profile-info">
        <p><strong>Nom :</strong> {userInfo.name || "Chargement..."}</p>
        <p><strong>Email :</strong> {userInfo.email || "Chargement..."}</p>
        {/* <p><strong>Date d'inscription :</strong> {userInfo.created_at}</p> // si tu veux après */}
      </div>


      <div className="profile-actions">
        <button className="change-password-btn">Changer mon mot de passe</button>


        <button onClick={handleLogout} className="logout-button">
          Se déconnecter
        </button>
      </div>


      <Footer />
    </div>
  );
};


export default ProfilePage;



