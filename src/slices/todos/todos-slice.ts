import { createSlice } from "@reduxjs/toolkit";
import { TodoType } from "../../types/todo-type";
const initialState: { todos: TodoType[] } = {
  todos: [],
};
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {},
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
