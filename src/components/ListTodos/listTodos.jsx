import Todo from "../Todo/todo";
import "./listTodos.css";
import { useTodos } from "../../context/TodoContext";

export default function ListTodos() {
  const { listTodos } = useTodos();

  return (
    <div className="list-todos">
      {listTodos.map((todo) => (
        <Todo 
          key={todo.id} 
          todo={todo} 
        />
      ))}
    </div>
  );
}