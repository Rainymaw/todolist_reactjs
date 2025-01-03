import React from "react";
import { useState } from "react";

function Tache({ todo, position, todos, setTodos }) {
  let [checkbox, setCheckbox] = useState();
  let [isEdit, setIsEdit] = useState(false);
  let [editTask, setEditTask] = useState(todo);
  let handleEdit = () => {
    let nouvelleListe = [
      ...todos.slice(0, position),
      editTask,
      ...todos.slice(position + 1, todos.length),
    ];
    setTodos(nouvelleListe);
    localStorage.setItem("todos", JSON.stringify(nouvelleListe));

    setIsEdit(!isEdit);
  };
  let handleDelete = () => {
    let nouvelleListe = [
      ...todos.slice(0, position),
      ...todos.slice(position + 1, todos.length),
    ];
    setTodos(nouvelleListe);
    localStorage.setItem("todos", JSON.stringify(nouvelleListe));
  };
  return (
    <div>
      {isEdit === true ? (
        <div>
          <input
            type="text"
            value={editTask}
            onInput={(event) => setEditTask(event.target.value)}
          />
          <input type="button" value="valider" onClick={() => handleEdit()} />
          <input
            type="button"
            value="annuler"
            onClick={() => setIsEdit(!isEdit)}
          />
        </div>
      ) : (
        <div>
          <input
            className="checkbox"
            type="checkbox"
            value={checkbox}
            onChange={(e) => setCheckbox(e.target.value)}
          />
          <p>{todo}</p>
          <input
            type="button"
            value="Supprimer"
            onClick={() => handleDelete()}
          />
          <input
            type="button"
            onClick={() => setIsEdit(!isEdit)}
            value="Editer"
          />
        </div>
      )}
    </div>
  );
}

export default Tache;
