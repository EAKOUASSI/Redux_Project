import React, { useEffect, useState } from "react";

function TaskForm({ onSave, editingTask, cancelEdit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || "");
      setDescription(editingTask.description || "");
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Tous les champs doivent être remplis.");
      return;
    }
    const task = { title, description };
    onSave(editingTask && editingTask._id ? editingTask._id : null, task);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">{editingTask ? "Modifier" : "Ajouter"}</button>
      {editingTask && (
        <button type="button" onClick={cancelEdit}>
          Annuler
        </button>
      )}
    </form>
  );
}

export default TaskForm;
