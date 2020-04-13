export const initialValue = {
  todos: [],
};

export const reducerTodo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("payload ", action.payload);
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
