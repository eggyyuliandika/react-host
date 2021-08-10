import React from "react";
import "./App.css";

function List(props) {
  return (
    <div className="list">
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
