import { createStore } from "redux";
import { loadState, saveState } from "./localStorage.js";

const initialState = {
  tasks: loadState()?.tasks || [],
  filter: "all",
  editingTask: null
};

function todoReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case "ADD_TASK":
      newState = {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
      break;

    case "UPDATE_TASK":
      newState = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
        editingTask: null
      };
      break;

    case "DELETE_TASK":
      newState = {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload)
      };
      break;

    case "TOGGLE_TASK":
      newState = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        )
      };
      break;

    case "SET_FILTER":
      newState = {
        ...state,
        filter: action.payload
      };
      break;

    // Dans votre reducer (store.js)
    case "SET_EDITING_TASK":
      return {
        ...state,
        editingTask: action.payload
      };

    default:
      return state;
  }

  saveState(newState);
  return newState;
}

const store = createStore(todoReducer);

export default store;
