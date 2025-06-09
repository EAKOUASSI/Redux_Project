import React from "react";

function TaskItem({ task, onToggle, onEdit, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <hr />
      <p style={{ whiteSpace: "pre-line" }}>{task.description}</p>
      <div>
        <button onClick={() => onToggle(task)}>
          {task.completed ? "Marquer active" : "Marquer terminée"}
        </button>
        <button onClick={() => onEdit(task)}>Modifier</button>
        <button onClick={() => onDelete(task._id)}>Supprimer</button>
      </div>
    </div>
  );
}

export default TaskItem;
