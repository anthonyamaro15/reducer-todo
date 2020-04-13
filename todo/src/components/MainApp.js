import React, { useReducer } from "react";
import { reducerTodo, initialValue } from "../reducers/reducerTodo";
import TodoForm from "./TodoForm";
import DisplayTodo from "./DisplayTodo";

const MainApp = () => {
  const [state, dispatch] = useReducer(reducerTodo, initialValue);

  const addTodo = (item) => {
    dispatch({ type: "ADD_TODO", payload: item });
  };
  return (
    <div>
      <h1>MainApp</h1>
      <TodoForm addTodo={addTodo} />
      {state.todos.map((item) => (
        <DisplayTodo key={item.id} todo={item} />
      ))}
    </div>
  );
};

export default MainApp;
