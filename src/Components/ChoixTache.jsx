import React from "react";

function ChoixTache(props) {
  return (
    <div className="choix-taches">
      <input type="button" value="All" className="choix-all" />
      <input type="button" value="Done" className="choix-done" />
      <input type="button" value="Todo" className="choix-todo" />
    </div>
  );
}

export default ChoixTache;
