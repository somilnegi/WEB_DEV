import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(0)
  // let counter = 5;
  const addValue = () => {
    counter = counter + 1;
    if (counter > 20) {
      counter=20;
    }
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    // setCounter(counter)
    console.log("clicked", counter);
    
  }
  const removeValue = () => {
    counter = counter-1;
    if (counter < 0) {
      counter=0;
    }
    setCounter(counter)
    console.log("clicked", counter);
    
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
