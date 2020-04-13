import React from "react";

const DisplayTodo = ({ todo }) => {
  //   console.log(todo);
  return (
    <div>
      <p>{todo.item}</p>
    </div>
  );
};

export default DisplayTodo;
