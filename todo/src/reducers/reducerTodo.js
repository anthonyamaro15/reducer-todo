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
      console.log(result);
      return {
        ...state,
        todos: result,
      };
    default:
      return state;
  }
};
