import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <span className="go-my-task">
          <h1>GoMyTask</h1>
          <TaskForm />
          <Filter />
        </span>
        <span>
          {" "}
          <TaskList />
        </span>
      </div>
    </Provider>
  );
}

export default App;
