require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connexion Mongo
connectDB();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/tasks", require("./routes/tasks"));

//Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Serveur lancé sur le port  http://localhost:${PORT}`)
);
