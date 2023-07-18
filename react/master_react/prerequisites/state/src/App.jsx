import React, { useState } from 'react'

const App = () => {
    const [count,setCount] = useState(100);
    const increment =()=>{
        setCount(count +1);
    };
    const decrement =()=>{
        setCount(count-1);
    };
  return (
    <>
        <h1>Welcome to my counter app</h1>
        <p>The count is: {count}</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </>
  )
}

export default App;