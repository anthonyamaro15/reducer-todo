export const initialValue = {
  todos: [
    { item: "study", completed: false, id: 1 },
    { item: "take trash out", completed: false, id: 2 },
    { item: "sleep", completed: false, id: 3 },
  ],
};

export const reducerTodo = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
