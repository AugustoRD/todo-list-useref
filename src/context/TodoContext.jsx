import { createContext, useContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [listTodos, setListTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(listTodos));
  }, [listTodos]);

  const newTodo = (title, text) => {
    const newTask = {
      id: Date.now(),
      title: title,
      text: text,
      completed: false,
    };
    setListTodos((prev) => [...prev, newTask]);
  };

  const deleteTodo = (todoId) => {
    setListTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const editTodo = (updatedTodo) => {
    setListTodos((prev) =>
      prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  return (
    <TodoContext.Provider value={{ listTodos, newTodo, deleteTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}
