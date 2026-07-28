import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0);

  return(
    <>
      <button onClick={() => {
        setCount((count) => count + 1)
      }}>+</button>
      <button onClick={() => {
        setCount((count) => count - 1)
      }}>-</button>
      <p>Count: {count}</p>
      <button onClick={() => {
        setCount(0)
      }}>Reset</button>
    </>
  )
}