const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();


// Routes
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes'); // <--- Ajouté





// Helmet 

const helmet = require('helmet');
app.use(helmet());


// Middlewares globaux
app.use(cors());
app.use(express.json());


// Routes API
app.use('/api/users', userRoutes);
app.use('/api', authRoutes); // <--- Route pour POST /login


// Lancement du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT}`);
});

