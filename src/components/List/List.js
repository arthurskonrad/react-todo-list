import React from "react";

import { Item } from "../Item";
import { Button } from "../Button";

import "./List.css";

function List({ list }) {
  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <ul className="List">
        {list.map((current) => {
          return <Item current={current}></Item>;
        })}
      </ul>

      <Button label="Adiciona"></Button>
      <Button label="Edita"></Button>
      <Button label="Remove"></Button>
    </div>
  );
}

export default List;
