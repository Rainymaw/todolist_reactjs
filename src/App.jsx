import NouvelleTache from "./Components/NouvelleTache";
import ChoixTache from "./Components/ChoixTache";
import { useState } from "react";
import Tache from "./Components/Tache";

function App(props) {
  let [todos, setTodos] = useState(() => {
    let listeTaches = localStorage.getItem("todos");
    return listeTaches ? JSON.parse(listeTaches) : [];
  });
  return (
    <div>
      <NouvelleTache todos={todos} setTodos={setTodos} />
      <ChoixTache />
      {todos.map((valeur, position) => (
        <Tache
          todo={valeur}
          position={position}
          key={position}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

export default App;
