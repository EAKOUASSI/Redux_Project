import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = useSelector((state) => {
    if (state.filter === "completed") {
      return state.tasks.filter((task) => task.isDone);
    } else if (state.filter === "active") {
      return state.tasks.filter((task) => !task.isDone);
    }
    return state.tasks;
  });

  return (
    <span className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </span>
  );
}

export default TaskList;
