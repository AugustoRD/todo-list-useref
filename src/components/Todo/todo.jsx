import { useState, useRef } from "react";
import "./todo.css"; 
import { useTodos } from "../../context/TodoContext";

export default function Todo({ todo }) {
  const { deleteTodo, editTodo } = useTodos();

  const [isEditing, setIsEditing] = useState(false);
  
  const editTitleRef = useRef();
  const editTextRef = useRef();
  
  const toggleCompleted = () => {
    editTodo({ ...todo, completed: !todo.completed });
  };

  const handleSave = () => {

    const newTitle = editTitleRef.current.value;
    const newText = editTextRef.current.value;

    if (newTitle.trim() === "" || newText.trim() === "") return;
    
    editTodo({ ...todo, title: newTitle, text: newText });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };
  
  if (isEditing) {
    return (
      <div className="todo-container">
        <input 
          type="text" 
          defaultValue={todo.title}
          ref={editTitleRef}
          className="edit-input"
        />
        <textarea 
          defaultValue={todo.text}
          ref={editTextRef}
          className="edit-textarea"
          rows="3"
        />
        <div className="todo-actions" style={{ marginTop: '10px' }}>
          <button className="btn-save" onClick={handleSave}>Salvar</button>
          <button className="btn-cancel" onClick={handleCancel}>Cancelar</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`todo-container ${todo.completed ? 'task-completed' : ''}`}>
      
      <div className="todo-header">
        <h3>{todo.title} {todo.completed && "✅"}</h3>
        
        <div className="todo-actions">
           <button className="btn-edit" onClick={() => setIsEditing(true)}>
             Editar 
           </button>
           
           <button className="btn-complete" onClick={toggleCompleted}>
             {todo.completed ? 'Desmarcar' : 'Concluir'}
           </button>
           
           <button className="btn-delete" onClick={() => deleteTodo(todo.id)}>
             Excluir 
           </button>
        </div>
      </div>

      <div className="todo-body">
        <p>{todo.text}</p>
      </div>
      
    </div>
  );
}