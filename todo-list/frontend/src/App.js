import React, { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const handleSave = async (id, task) => {
    if (id) {
      const updated = await updateTask(id, task);
      setTasks((prev) => prev.map((t) => (t._id === id ? updated : t)));
    } else {
      const newTask = await createTask({ ...task, completed: false });
      setTasks((prev) => [...prev, newTask]);
    }
    setEditingTask(null);
    console.log("tâche à faire :", task);
  };

  const handleToggle = async (task) => {
    const updated = await updateTask(task._id, {
      ...task,
      completed: !task.completed
    });
    setTasks((prev) => prev.map((t) => (t._id === task._id ? updated : t)));
  };

  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette tâche ?")) {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    }
  };

  return (
    <div className="app-container">
      <span className="go-my-task">
        <h1>GoMyTask</h1>
        <TaskForm
          onSave={handleSave}
          editingTask={editingTask}
          cancelEdit={() => setEditingTask(null)}
        />
      </span>
      <span>
        <TaskList
          tasks={tasks}
          onToggle={handleToggle}
          onEdit={setEditingTask}
          onDelete={handleDelete}
        />
      </span>
    </div>
  );
}

export default App;
