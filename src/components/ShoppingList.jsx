import { useState } from "react";

const ShoppingList = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputValueQuantity, setInputValueQuantity] = useState("");

  const addItem = () => {
    if (inputValue && inputValueQuantity) {
      setList([...list, { name: inputValue, quantity: parseInt(inputValueQuantity, 10) }]);
      setInputValue("");
      setInputValueQuantity("");
    }
  };

  return (
    <div>
        <h1>Shopping list</h1>
        <ul>
        {list.map((item, index) => (
          <li key={index}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="enter item"
      />
      <input
        type="number"
        value={inputValueQuantity}
        onChange={(e) => setInputValueQuantity(e.target.value)}
        placeholder="enter quantity"
      />
      <button onClick={addItem}>Add item</button>
    </div>
  );
};

export default ShoppingList;
