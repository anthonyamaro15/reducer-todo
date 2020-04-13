import React from "react";

const DisplayTodo = ({ todo, toggleTodo }) => {
  //   console.log(todo);
  return (
    <div>
      <div onClick={toggleTodo}>
        <p>{todo.item}</p>
      </div>
    </div>
  );
};

export default DisplayTodo;
