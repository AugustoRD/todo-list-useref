import "./App.css"; 
import TodoFields from "./components/TodoFields/todoFields";
import ListTodos from "./components/ListTodos/listTodos";
import { useTodos } from "./context/TodoContext";

export default function App() {
  const { listTodos } = useTodos();

  return (
    <div className="App">
      <h1>Todo List</h1>

      <TodoFields />

      <div className="card">
        {listTodos.length > 0 ? (
          <ListTodos />
        ) : (
          <p>No todos yet.</p>
        )}
      </div>
      
    </div>
  );
}