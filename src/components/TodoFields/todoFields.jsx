import { useRef } from "react";
import "./todoFields.css";
import { useTodos } from "../../context/TodoContext";

export default function TodoFields() {
  const { newTodo } = useTodos();
  
  const titleRef = useRef();
  const textRef = useRef();

  const handleSubmit = () => {
    const titleValue = titleRef.current.value;
    const textValue = textRef.current.value;

    if (titleValue.trim() === "" || textValue.trim() === "") return;
    
    newTodo(titleValue, textValue);

    titleRef.current.value = "";
    textRef.current.value = "";
  };

    return (
      <div className="todo-fields-container">

        <div>
        <label> Título </label>
        <input 
        type="text" 
        placeholder="Título" 
        ref={titleRef}
        />
      
     </div>

    <div>
      <label> Texto </label>
      <input 
        type="text" 
        placeholder="Descrição da tarefa..." 
        ref={textRef}
      />
    </div>

    <button onClick={handleSubmit}>Adicionar Tarefa</button>

    </div>
    );
}