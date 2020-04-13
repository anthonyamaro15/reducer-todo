import React, { useReducer } from "react";
import { reducerTodo, initialValue } from "../reducers/reducerTodo";
import TodoForm from "./TodoForm";
import DisplayTodo from "./DisplayTodo";

const MainApp = () => {
  const [state, dispatch] = useReducer(reducerTodo, initialValue);

  const addTodo = (item) => {
    dispatch({ type: "ADD_TODO", payload: item });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const removeCompleted = () => {
    dispatch({ type: "REMOVE_COMPLETED" });
  };

  return (
    <div className="App">
      <h1>todo app</h1>
      <TodoForm addTodo={addTodo} />
      {state.todos.map((item) => (
        <DisplayTodo
          key={item.id}
          todo={item}
          toggleTodo={() => toggleTodo(item.id)}
        />
      ))}

      {state.todos.length > 0 ? (
        <button className="remove-completed" onClick={removeCompleted}>
          remove
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default MainApp;
