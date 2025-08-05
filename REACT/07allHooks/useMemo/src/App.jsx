//useMemo hook returns a memoized value. It's like caching a value so that it doesn't need to be recalculated. It only runs when one of it's dependencies gets updated. This can improve the performance of the application.

import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  const [count, setCount] = useState(0)

  function cubeNum(num) {
    console.log('Calculation done');
    return Math.pow(num, 3);
  }

  const result=useMemo(()=> cubeNum(number), [number])

  return (
    <>
      <input type="num" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
      <h1>Cube of the number: {result}</h1>
      <button onClick={()=>{setCount(count+1)}}>Counter++</button>
      <h1>Counter: {count}</h1>
    </>
  )
}

export default App
