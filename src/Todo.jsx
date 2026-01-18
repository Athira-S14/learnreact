import { useState } from "react";
import './index.css';
function Todo() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([
    "Learn React",
    "Build a React App",
    "Deploy the App",
  ]);

  console.log(todoList);

  const updateTodoList = () => {
    if (text.trim() === "") {
      alert("Please enter a todo item.");
    } else {
      setTodoList([...todoList, text]);
      setText("");
    }
  };
const deleteTodo = (indexToDelete) => {
    setTodoList(todoList.filter((_, index) => index !== indexToDelete));
  };
  return (
    <div>
      <h1>Todo Component</h1>

      <ul>
        {todoList.map((todo, index) => {
          return <li key={todo + index}>{todo}
          <button onClick={() => deleteTodo(index)}>Delete</button></li>;
        })}
      </ul>

      <h2>{text}</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="New Todo"
      />

      <button onClick={updateTodoList}>Add Todo</button>
    </div>
  );
}

export default Todo;
