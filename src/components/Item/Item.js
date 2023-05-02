import React from "react";

import "./Item.css";

function Item({ current }) {
  return <li className="Item">{current}</li>;
}

export default Item;
