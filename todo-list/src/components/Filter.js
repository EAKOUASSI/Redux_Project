import React from "react";
import { useDispatch } from "react-redux";

function Filter() {
  const dispatch = useDispatch();

  return (
    <div className="filter-buttons">
      <button onClick={() => dispatch({ type: "SET_FILTER", payload: "all" })}>
        Toutes
      </button>
      <button
        onClick={() => dispatch({ type: "SET_FILTER", payload: "active" })}
      >
        Actives
      </button>
      <button
        onClick={() => dispatch({ type: "SET_FILTER", payload: "completed" })}
      >
        Complétées
      </button>
    </div>
  );
}

export default Filter;
