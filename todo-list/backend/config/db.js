const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connexion à MongoDB réussie");
  } catch (error) {
    console.error("❌ Erreur de connexion à MongoDB:", error.message);
    process.exit(1); // Arrête le serveur en cas d'erreur
  }
};

module.exports = connectDB;
