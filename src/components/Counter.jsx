import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount +1)
    }


  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>+</button>

    </div>
  )
}

export default Counter