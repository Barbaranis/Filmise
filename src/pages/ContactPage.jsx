import React, { useState } from "react";
import "../styles/ContactPage.css";


const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);


  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return regex.test(email);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};


    if (name.trim().length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères.";
    }


    if (!validateEmail(email)) {
      newErrors.email = "Email invalide.";
    }


    if (message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères.";
    }


    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);
      // ici, tu pourrais envoyer vers une API si besoin
      console.log({ name, email, message });
      setName("");
      setEmail("");
      setMessage("");
    }
  };


  return (
    <div className="contact-page">
      <h2>Contact</h2>
      <p>Tu as une question, un bug à signaler ou une suggestion ?</p>
      <p>N'hésite pas à nous écrire par email ou via le formulaire ci-dessous :</p>


      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <p className="form-error">{errors.name}</p>}


        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p className="form-error">{errors.email}</p>}


        <textarea
          placeholder="Votre message..."
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        {errors.message && <p className="form-error">{errors.message}</p>}


        <button type="submit">Envoyer</button>


        {success && <p className="form-success">Message envoyé avec succès !</p>}
      </form>
    </div>
  );
};


export default ContactPage;

