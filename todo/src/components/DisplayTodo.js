import React from "react";

const DisplayTodo = ({ todo, toggleTodo }) => {
  const toggle = todo.completed ? "completed todo" : "todo";
  return (
    <div className="todo-container">
      <div onClick={toggleTodo} className={toggle}>
        <p>{todo.item}</p>
      </div>
    </div>
  );
};

export default DisplayTodo;
