import React from "react";

const DisplayTodo = ({ todo, toggleTodo }) => {
  //   console.log(todo);
  return (
    <div onClick={toggleTodo}>
      <p>{todo.item}</p>
    </div>
  );
};

export default DisplayTodo;
