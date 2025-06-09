const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// GET/Obtenirs toutes les tâches
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({
      message: "Erreur lors de la récupération des tâches",
      error: err.message
    });
  }
});

// GET/Obtenir une tâche particuliere par son ID
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
});

// POST/Ajouter une nouvelle tâche
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Le titre et la description sont requis." });
  }

  const newTask = new Task({
    title,
    description,
    completed: false
  });

  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(500).json({
      message: "Erreur lors de la création de la tâche",
      error: err.message
    });
  }
});

// PUT/Mettre à jour une tâche par son ID
router.put("/:id", async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, completed },
      { new: true, runValidators: true }
    );

    if (!updatedTask)
      return res.status(404).json({ message: "Tâche non trouvée" });

    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour de la tâche",
      error: err.message
    });
  }
});

// DELETE/Supprimer une tâche par son ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask)
      return res.status(404).json({ message: "Tâche non trouvée" });

    res.json({ message: "Tâche supprimée avec succès" });
  } catch (err) {
    res.status(500).json({
      message: "Erreur lors de la suppression de la tâche",
      error: err.message
    });
  }
});

module.exports = router;
