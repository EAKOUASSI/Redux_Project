import React from "react";
import { useDispatch } from "react-redux";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <div className={`task-item ${task.isDone ? "completed" : ""}`}>
      <h3>{task.name}</h3>
      <hr />
      <p>{task.description}</p>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "TOGGLE_TASK",
              payload: task.id
            })
          }
        >
          {task.isDone ? "Marquer active" : "Marquer terminée"}
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "SET_EDITING_TASK",
              payload: task
            })
          }
        >
          Modifier
        </button>

        <button
          onClick={() => {
            if (
              window.confirm("Voulez-vous vraiment supprimer cette tâche ?")
            ) {
              dispatch({ type: "DELETE_TASK", payload: task.id });
            }
          }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
