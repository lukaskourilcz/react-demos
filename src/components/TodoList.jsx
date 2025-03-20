import { useState } from "react";

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItemToArray = () => {
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <h1>To do list:</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="enter a task"
      />
      <button onClick={addItemToArray}>Add item to array</button>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default TodoList;
