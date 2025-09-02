import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        // Initial todo items can be added here
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a Todo App", completed: false } 
    ],
    addTodo: (todo) => {},
    updateTodo: (id, updatedTodo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;