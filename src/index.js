import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todo from "./Todo";

var todoItems = [];
todoItems.push({ index: 1, value: "learn react", done: true });
todoItems.push({ index: 2, value: "Deploy on docker hub", done: true });
todoItems.push({ index: 3, value: "Play games", done: false });

ReactDOM.render(
  <Todo initItems={todoItems} />,
  document.getElementById("root")
);