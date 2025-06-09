import React from "react";

function Filter({ filter, setFilter }) {
  return (
    <div className="filter-buttons">
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
      >
        Toutes
      </button>
      <button
        onClick={() => setFilter("active")}
        className={filter === "active" ? "active" : ""}
      >
        Actives
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={filter === "completed" ? "active" : ""}
      >
        Complétées
      </button>
    </div>
  );
}

export default Filter;
