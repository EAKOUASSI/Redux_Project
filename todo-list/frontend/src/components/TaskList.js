import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onEdit, onDelete }) {
  return (
    <span className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </span>
  );
}

export default TaskList;
