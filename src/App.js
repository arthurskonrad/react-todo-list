import { List } from "./components/List";

import "./App.css";

function App() {
  const list = ["Lavar louça", "Lavar Roupa", "Tratar os pets"];

  const listNumber = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <List list={list}></List>
      <List list={listNumber}></List>
    </div>
  );
}

export default App;
