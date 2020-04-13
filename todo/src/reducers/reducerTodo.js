export const initialValue = {
  todos: [],
};

export const reducerTodo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      const result = state.todos.map((item) => {
        if (action.payload === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      return {
        ...state,
        todos: result,
      };

    case "REMOVE_COMPLETED":
      const filtered = state.todos.filter((item) => item.completed !== true);
      return {
        ...state,
        todos: filtered,
      };
    default:
      return state;
  }
};
