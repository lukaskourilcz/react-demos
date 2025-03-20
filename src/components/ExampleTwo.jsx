import { useState } from "react";

const ExampleTwo = () => {
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100)
  );

  const generateRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 100)
    setRandomNumber(newNumber)
  }

  return <div>
    <h1>Random number: {randomNumber}</h1>
    <button onClick={generateRandomNumber}>Generate Random Number</button>
  </div>;
};

export default ExampleTwo;
