import React, { useState } from 'react';

export const Counter: React.FC = () => {

  let [count, setCount] = useState(0);

  const incrementCount = () => setCount(count++);
  
  const decrementCount = () => setCount(count--);

  return(
    <div>
      <h1>Counter</h1>
      <button onClick = {decrementCount}>  -</button>
      <span>    {count}    </span>
      <button onClick = {incrementCount}>+  </button>
      <br/>
      <br/>
      <button onClick = {() => setCount((count=>count=0))} >Reset</button>
    </div>
  )
}