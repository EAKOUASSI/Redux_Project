import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function TaskForm() {
  const dispatch = useDispatch();
  const editingTask = useSelector((state) => state.editingTask);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setName(editingTask.name);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert("Tous les champs doivent être remplis.");
      return;
    }

    if (editingTask) {
      dispatch({
        type: "UPDATE_TASK",
        payload: { ...editingTask, name, description }
      });
    } else {
      dispatch({
        type: "ADD_TASK",
        payload: {
          id: Date.now(),
          name,
          description,
          isDone: false
        }
      });
    }

    setName("");
    setDescription("");
    dispatch({ type: "SET_EDITING_TASK", payload: null });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">{editingTask ? "Modifier" : "Ajouter"}</button>
      {editingTask && (
        <button
          type="button"
          onClick={() => dispatch({ type: "SET_EDITING_TASK", payload: null })}
        >
          Annuler
        </button>
      )}
    </form>
  );
}

export default TaskForm;
