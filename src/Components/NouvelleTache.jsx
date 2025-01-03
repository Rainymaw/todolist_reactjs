import React from "react";
import { useState } from "react";

function NouvelleTache({ todos, setTodos }) {
  let [nouveauTodo, setNouveauTodo] = useState("");
  let handleClick = () => {
    let nouvelleListe = [...todos, nouveauTodo];
    setTodos(() => nouvelleListe);
    localStorage.setItem("todos", JSON.stringify(nouvelleListe));
    console.log(todos);
  };
  return (
    <div className="newtask">
      <input
        type="text"
        value={nouveauTodo}
        onInput={(event) => setNouveauTodo(event.target.value)}
        className="newtask-input"
      />
      <input
        type="button"
        value="Add New Task"
        className="newtask-button"
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default NouvelleTache;
