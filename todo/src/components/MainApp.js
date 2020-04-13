import React, { useReducer } from "react";
import { reducerTodo, initialValue } from "../reducers/reducerTodo";
import TodoForm from "./TodoForm";
import DisplayTodo from "./DisplayTodo";

const MainApp = () => {
  const [state, dispatch] = useReducer(reducerTodo, initialValue);

  //   console.log(state.todos);
  return (
    <div>
      <h1>MainApp</h1>
      <TodoForm />
      {state.todos.map((item) => (
        <DisplayTodo key={item.id} todo={item} />
      ))}
    </div>
  );
};

export default MainApp;
